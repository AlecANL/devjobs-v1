import { type Job } from '@models/job.interface.ts'

export interface JobState {
  jobs: Job[]
  loading: boolean
  error: boolean
}
