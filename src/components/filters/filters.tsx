import { FiltersContainer, FiltersContentWrapper, FilterSearchSection } from '@components/filters/filters.styled.tsx'
import { type Job } from '@models/job.interface.ts'
import { useMemo } from 'react'
import { getJobLocations } from '@/utils/jobs.utils.ts'
import { IconFilter, IconSearch } from '@components/icons/icons.tsx'
import { LocationFilter } from '@components/location-filter'
import { FullTimeFilter } from '@components/full-time-filter'
import { TitleFilter } from '@components/title-filter/title-filter.tsx'
import { Button } from '@components/button'
import { type onChangeFilterEvent } from '@models/job-state.interface.ts'

interface Props {
  jobs: Job[]
  toggleModal: () => void
  filtersValue: any
  onChangeFiled: onChangeFilterEvent
}
export function Filters (props: Props) {
  const { jobs, toggleModal, filtersValue, onChangeFiled } = props
  const locations = useMemo(() => {
    return getJobLocations(jobs)
  }, [jobs])

  return (
    <>
      <FiltersContainer>
        <FiltersContentWrapper>
          <TitleFilter onFieldChange={onChangeFiled} filterValue={filtersValue.title}/>
          <Button data-testid='modal-filters' className='btn-filters' onClick={toggleModal} aria-label='modal-filters'>
            <IconFilter/>
          </Button>
          <LocationFilter onFieldChange={onChangeFiled} options={locations} filterValue={filtersValue.location}/>
          <FilterSearchSection>
            <FullTimeFilter onFieldChange={onChangeFiled} filterValue={filtersValue.fullTime}/>
            <Button variant='primary'>
              <IconSearch/>
              <span>Search</span>
            </Button>
          </FilterSearchSection>
        </FiltersContentWrapper>
      </FiltersContainer>
    </>
  )
}
