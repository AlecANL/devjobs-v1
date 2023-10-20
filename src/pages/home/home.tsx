import { lazy, Suspense, useEffect, useState } from 'react'
import { type Job } from '@models/job.interface.ts'
import { type JobState } from '@models/job-state.interface.ts'
import { JobCard } from '@components/job-card/job-card.tsx'
import { HomeMain, JobList } from '@pages/home/home.styled.tsx'
import { createPortal } from 'react-dom'
import { useModal } from '@hooks/use-modal.ts'
import { Filters } from '@components/filters'

const ModalLazy = lazy(async () => await import('@components/modal'))
const ModalFilters = lazy(async () => await import('@components/modal-filter'))

export default function Home () {
  const [state, setState] = useState<JobState>({
    jobs: [],
    loading: true,
    error: false
  })

  const { openModal, toggleModal } = useModal()

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

  // const filteredJobs = useMemo(() => {
  //   return state.jobs.filter(job => {
  //     const titleMatch = job.position.toLowerCase().includes(filter.title.toLowerCase())
  //     const locationMatch = job.location.toLowerCase().includes(filter.location.toLowerCase())
  //     const fullTimeMatch = filter.fullTime ? job.contract === 'Full Time' : true
  //     return titleMatch && locationMatch && fullTimeMatch
  //   })
  // }, [filter, state])

  const $modalContent = document.querySelector('#modal')

  return (
    <>
      {
        createPortal(
          <Suspense fallback={null}>
            <ModalLazy isOpen={openModal} onClose={toggleModal}>
              <ModalFilters jobs={state.jobs} onClose={toggleModal}/>
            </ModalLazy>
          </Suspense>,
          $modalContent as HTMLElement
        )
      }
      <Filters jobs={state.jobs} toggleModal={toggleModal} />
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
