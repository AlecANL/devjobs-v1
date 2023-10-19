import { useEffect, useState } from 'react'
import { type Job } from '@models/job.interface.ts'
import { type JobState } from '@models/job-state.interface.ts'
import { JobCard } from '@components/job-card/job-card.tsx'
import { HomeMain, JobList } from '@pages/home/home.styled.tsx'

export default function Home () {
  const [state, setState] = useState<JobState>({
    jobs: [],
    loading: true,
    error: false
  })
  const getJobs = async () => {
    try {
      const response = await fetch('/data/data.json')
      return await (await response.json() as Promise<Job[]>)
    } catch (error) {
      throw new Error('Error fetching jobs')
    }
  }

  useEffect(() => {
    getJobs().then(data => {
      setState({
        ...state,
        jobs: data,
        loading: false,
        error: false
      })
    })
      .catch(() => {
        setState({
          jobs: [],
          loading: false,
          error: true
        })
      })
  }, [])

  return (
    <>
      <HomeMain>
        <JobList>
          {
            state.jobs.map(job => (
              <JobCard key={job.id} job={job}/>
            ))
          }
        </JobList>
      </HomeMain>
    </>
  )
}
