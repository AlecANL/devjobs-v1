import type React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useJobStore } from '@store/jobs.store.ts'
import { getJobs } from '@/utils/jobs.utils.ts'
import { type FilterState, type onChangeFilter } from '@models/job-state.interface.ts'

export function useFilter () {
  const { setJobs, getJobsFiltered, jobs } = useJobStore()
  const [filter, setFilter] = useState<FilterState>({
    title: '',
    location: '',
    fullTime: false
  })

  useEffect(() => {
    getJobs().then(jobs => { setJobs(jobs) })
  }, [])

  useEffect(() => {
    document.title = 'Devjobs | Home'
  }, [])

  const handleFormControlChange = (event: onChangeFilter) => {
    const { type, name } = event.currentTarget
    const isChecked = (event.target as HTMLInputElement).checked
    const newValue = type === 'checkbox' ? isChecked : event.target.value
    setFilter({
      ...filter,
      [name]: newValue
    })
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const objData = Object.fromEntries(formData.entries())
    setFilter({
      ...filter,
      ...objData
    })
  }

  const filteredJobs = useMemo(() => {
    return getJobsFiltered(filter)
  }, [filter, jobs])

  return {
    filter,
    handleFormControlChange,
    filteredJobs,
    onSubmit,
    jobs
  }
}
