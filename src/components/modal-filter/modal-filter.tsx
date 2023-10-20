import { ModalFilterStyled } from '@components/modal-filter/modal-filter.styled.tsx'
import { LocationFilter } from '@components/location-filter'
import { FullTimeFilter } from '@components/full-time-filter'
import { useFilter } from '@hooks/use-filter.ts'
import React, { useMemo } from 'react'
import { getJobLocations } from '@/utils/jobs.utils.ts'
import { type Job } from '@models/job.interface.ts'
import { Button } from '@components/button'

interface Props {
  jobs: Job[]
  onClose: () => void
}
export default function ModalFilter (props: Props) {
  const { jobs, onClose } = props
  const { filter, handleFormControlChange } = useFilter()

  const locations = useMemo(() => {
    return getJobLocations(jobs)
  }, [jobs])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onClose()
  }

  return (
    <>
      <ModalFilterStyled onSubmit={onSubmit}>
        <LocationFilter className='visibility' options={locations} filterValue={filter.location} onChange={handleFormControlChange}/>
        <FullTimeFilter className='visibility' filterValue={filter.fullTime} onChange={handleFormControlChange}/>
        <Button>Search</Button>
      </ModalFilterStyled>
    </>
  )
}
