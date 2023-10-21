import { devtools } from 'zustand/middleware'
import { create } from 'zustand'
import { getJobsFiltered } from '@/utils/jobs.utils.ts'
import { type JobsStore } from '@models/job-state.interface.ts'
import { type Job } from '@models/job.interface.ts'

export const useJobStore = create<JobsStore>()(devtools((set, get) => ({
  jobs: [],
  setJobs: (jobs: Job[]) => {
    set({ jobs }, false, 'SET_JOBS')
  },
  getJobsFiltered: (filterValue: any) => {
    const { jobs } = get()

    return getJobsFiltered(jobs, filterValue)
  }
}), {
  name: 'jobs-store'
}))
