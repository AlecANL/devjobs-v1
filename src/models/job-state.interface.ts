import { type Job } from '@models/job.interface.ts'
import { type ChangeEvent } from 'react'

export interface JobState {
  job: Job | undefined
  loading: boolean
  error: boolean
}

export type onChangeFilter = ChangeEvent<HTMLInputElement | HTMLSelectElement>
export type onChangeFilterEvent = (event: onChangeFilter) => void

export interface JobsStore {
  jobs: Job[]
  getJobsFiltered: (filterValue: any) => Job[]
  setJobs: (jobs: Job[]) => void
}

export interface FilterState {
  title: string
  location: string
  fullTime: boolean
}
