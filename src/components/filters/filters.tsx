import { FiltersContainer, FiltersContentWrapper, FilterSearchSection } from '@components/filters/filters.styled.tsx'
import { type Job } from '@models/job.interface.ts'
import { useMemo } from 'react'
import { getJobLocations } from '@/utils/jobs.utils.ts'
import { IconFilter } from '@components/icons/icons.tsx'
import { useFilter } from '@hooks/use-filter.ts'
import { LocationFilter } from '@components/location-filter'
import { FullTimeFilter } from '@components/full-time-filter'
import { TitleFilter } from '@components/title-filter/title-filter.tsx'
import { Button } from '@components/button'

interface Props {
  jobs: Job[]
  toggleModal: () => void
}
export function Filters (props: Props) {
  const { jobs, toggleModal } = props
  const { filter, handleFormControlChange } = useFilter()

  const locations = useMemo(() => {
    return getJobLocations(jobs)
  }, [jobs])

  return (
    <>
      <FiltersContainer>
        <FiltersContentWrapper>
          <TitleFilter filterValue={filter.title} onChange={handleFormControlChange}/>
          <Button className='btn-filters' onClick={toggleModal} aria-label='modal-filters'>
            <IconFilter/>
          </Button>
          <LocationFilter options={locations} filterValue={filter.location} onChange={handleFormControlChange}/>
          <FilterSearchSection>
            <FullTimeFilter filterValue={filter.fullTime} onChange={handleFormControlChange}/>
            <Button variant='primary'>Search</Button>
          </FilterSearchSection>
        </FiltersContentWrapper>
      </FiltersContainer>
    </>
  )
}
