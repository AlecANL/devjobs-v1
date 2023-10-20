import { type Job } from '@models/job.interface.ts'

export const getJobLocations = (jobs: Job[]) => {
  return Array.from(new Set(jobs.map((job) => job.location)))
}
