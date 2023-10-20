import { type Job } from '@models/job.interface.ts'
import { type ChangeEvent } from 'react'

export interface JobState {
  jobs: Job[]
  loading: boolean
  error: boolean
}

export type onChangeFilter = ChangeEvent<HTMLInputElement | HTMLSelectElement>
