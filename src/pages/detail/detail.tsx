import { useParams, useNavigate } from 'react-router-dom'
import { type Job } from '@models/job.interface.ts'
import { useEffect, useState } from 'react'

export default function Detail () {
  const { id } = useParams()
  const navigate = useNavigate()
  const [job, setJob] = useState<Job | undefined>(undefined)
  const getJobs = async () => {
    try {
      const response = await fetch('/data/data.json')
      return await (await response.json() as Promise<Job[]>)
    } catch (error) {
      throw new Error('Error fetching jobs')
    }
  }

  const getJobDetail = async () => {
    try {
      const jobs = await getJobs()
      const job = jobs.find(job => String(job.id) === id)
      if (!job) {
        navigate('/404')
        return
      }

      setJob(job)
    } catch (e) {
      navigate('/404')
    }
  }

  useEffect(() => {
    if (!id) {
      navigate('/404')
    } else {
      getJobDetail().finally(() => {})
    }
  }, [id])

  const imageJob = (imgUrl: string | undefined) => `/public${String(imgUrl).slice(1)}`

  return (
    <>
      <main>
        <section>
          <img src={imageJob(job?.logo)} alt={job?.company}/>
          <div>
            <h2>{job?.company}</h2>
          </div>
          <a href={job?.website}>company site</a>
        </section>
        <section>
          <div>
            <div>
              <span>{job?.postedAt}</span>
              <span>{job?.contract}</span>
            </div>
            <div>
              <h2>{job?.position}</h2>
              <span>{job?.location}</span>
            </div>
            <a href={job?.website}>apply</a>
          </div>
          <div>
            {
              job?.description
                ? (<p>{job.description}</p>)
                : null
            }
          </div>

          <div>
            {
              job?.requirements
                ? (
                  <div>
                    <h3>Requirements</h3>
                    <p>{job.requirements.content}</p>
                    <ul>
                      {
                        job.requirements.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        )
                        )
                      }
                    </ul>
                  </div>
                  )
                : null
            }
          </div>

          <div>
            {
              job?.role
                ? (
                  <div>
                    <h3>What you will do</h3>
                    <p>{job.role.content}</p>
                    <ul>
                      {
                        job.role.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))
                      }
                    </ul>
                  </div>
                  )
                : null
            }
          </div>
        </section>
      </main>
      <footer>
        <div>
          <div>
            <h2>{job?.company}</h2>
            <span>{job?.location}</span>
          </div>
          <a href={job?.website}>apply now</a>
        </div>
      </footer>
    </>
  )
}
