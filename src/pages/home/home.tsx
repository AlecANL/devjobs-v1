import { type ChangeEvent, lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { type Job } from '@models/job.interface.ts'
import { type JobState } from '@models/job-state.interface.ts'
import { JobCard } from '@components/job-card/job-card.tsx'
import { HomeMain, JobList } from '@pages/home/home.styled.tsx'
import { IconFilter, IconLocation, IconSearch } from '@components/icons/icons.tsx'
import { createPortal } from 'react-dom'
import { useModal } from '@hooks/use-modal.ts'

const ModalLazy = lazy(async () => await import('@components/modal'))

export default function Home () {
  const [state, setState] = useState<JobState>({
    jobs: [],
    loading: true,
    error: false
  })

  const [filter, setFilter] = useState({
    title: '',
    location: '',
    fullTime: false
  })

  const { openModal, toggleModal } = useModal()

  const handleFormControlChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { type, name } = event.currentTarget
    const isChecked = (event.target as HTMLInputElement).checked
    const newValue = type === 'checkbox' ? isChecked : event.target.value
    setFilter({
      ...filter,
      [name]: newValue
    })
  }

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

  const locations = useMemo(() => {
    return Array.from(new Set(state.jobs.map(job => job.location)))
  }, [state])

  const filteredJobs = useMemo(() => {
    return state.jobs.filter(job => {
      const titleMatch = job.position.toLowerCase().includes(filter.title.toLowerCase())
      const locationMatch = job.location.toLowerCase().includes(filter.location.toLowerCase())
      const fullTimeMatch = filter.fullTime ? job.contract === 'Full Time' : true
      return titleMatch && locationMatch && fullTimeMatch
    })
  }, [filter, state])

  const $modalContent = document.querySelector('#modal')

  return (
    <>
      {
        createPortal(
          <Suspense fallback={null}>
            <ModalLazy isOpen={openModal} onClose={toggleModal}>
              <div>
                <div>
                  <IconLocation/>
                  <select name='location' value={filter.location} onChange={handleFormControlChange}>
                    <option value=''>Filter by location</option>
                    {
                      locations.map((location) => (
                        <option key={location} value={location}>{location}</option>
                      ))
                    }
                  </select>
                </div>
                <div>
                  <label htmlFor='fullTime' />
                  <label htmlFor='fullTime'>Full time only</label>
                  <input name='fullTime' checked={filter.fullTime} onChange={handleFormControlChange} id='fullTime' type='checkbox'/>
                </div>
                <button onClick={toggleModal}>Search</button>
              </div>
            </ModalLazy>
          </Suspense>,
          $modalContent as HTMLElement
        )
      }
      <section>
        <div>
          <IconSearch/>
          <input name='title' value={filter.title} onChange={handleFormControlChange} type='search' placeholder='Senior software enginner...'/>
        </div>
        <button onClick={toggleModal} aria-label='modal-filters'>
          <IconFilter/>
        </button>

        <div>
          <IconLocation/>
          <select name='location' value={filter.location} onChange={handleFormControlChange}>
            <option value=''>Filter by location</option>
            {
              locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))
            }
          </select>
        </div>
        <div>
          <label htmlFor='fullTime' />
          <label htmlFor='fullTime'>Full time only</label>
          <input name='fullTime' checked={filter.fullTime} onChange={handleFormControlChange} id='fullTime' type='checkbox'/>
        </div>
      </section>
      <HomeMain>
        <JobList>
          {
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job}/>
            ))
          }
        </JobList>
      </HomeMain>
    </>
  )
}
