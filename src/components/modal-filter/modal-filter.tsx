import { ModalFilterStyled } from '@components/modal-filter/modal-filter.styled.tsx'
import { LocationFilter } from '@components/location-filter'
import { FullTimeFilter } from '@components/full-time-filter'
import React, { useMemo } from 'react'
import { getJobLocations } from '@/utils/jobs.utils.ts'
import { type Job } from '@models/job.interface.ts'
import { Button } from '@components/button'
import { type onChangeFilterEvent } from '@models/job-state.interface.ts'

interface Props {
  jobs: Job[]
  onClose: () => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onFieldChange: onChangeFilterEvent
  filterValue: any
}
export default function ModalFilter (props: Props) {
  const { jobs, onClose, filterValue, onSubmit, onFieldChange } = props

  const locations = useMemo(() => {
    return getJobLocations(jobs)
  }, [])

  const onSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(event)
    onClose()
  }

  return (
    <>
      <ModalFilterStyled datatest-id='form-modal-filters' onSubmit={onSubmitted}>
        <LocationFilter
          onFieldChange={onFieldChange}
          className='visibility location-mobile'
          options={locations}
          filterValue={filterValue.location}
        />
        <FullTimeFilter
          onFieldChange={onFieldChange}
          className='visibility full-time-mobile'
          filterValue={filterValue.fullTime}/>
        <Button>Search</Button>
      </ModalFilterStyled>
    </>
  )
}
