import { lazy, Suspense } from 'react'
import { JobCard } from '@components/job-card/job-card.tsx'
import { HomeMain, JobList } from '@pages/home/home.styled.tsx'
import { createPortal } from 'react-dom'
import { useModal } from '@hooks/use-modal.ts'
import { Filters } from '@components/filters'
import { useFilter } from '@hooks/use-filter.ts'

const ModalLazy = lazy(async () => await import('@components/modal'))
const ModalFilters = lazy(async () => await import('@components/modal-filter'))

export default function Home () {
  const { filteredJobs, onSubmit, filter, handleFormControlChange, jobs } = useFilter()
  const { openModal, toggleModal } = useModal()

  const $modalContent = document.querySelector('#modal')

  return (
    <>
      {
        createPortal(
          <Suspense fallback={null}>
            <ModalLazy isOpen={openModal} onClose={toggleModal}>
              <ModalFilters
                onFieldChange={handleFormControlChange}
                filterValue={filter}
                onSubmit={onSubmit}
                jobs={jobs}
                onClose={toggleModal}/>
            </ModalLazy>
          </Suspense>,
          $modalContent as HTMLElement
        )
      }
      <Filters
        onChangeFiled={handleFormControlChange}
        filtersValue={filter}
        jobs={jobs}
        toggleModal={toggleModal} />
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
