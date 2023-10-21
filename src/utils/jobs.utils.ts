import { type Job } from '@models/job.interface.ts'

export const getJobLocations = (jobs: Job[]) => {
  return Array.from(new Set(jobs.map((job) => job.location)))
}

export const getJobsFiltered = (jobs: Job[], filterValue: any) => {
  return jobs.filter(job => {
    const titleMatch = job.position.toLowerCase().includes(filterValue.title.toLowerCase())
    const locationMatch = job.location.toLowerCase().includes(filterValue.location.toLowerCase())
    const fullTimeMatch = filterValue.fullTime ? job.contract === 'Full Time' : true
    return titleMatch && locationMatch && fullTimeMatch
  })
}

export const getJobs = async () => {
  try {
    const response = await fetch('/data/data.json')
    return await (await response.json() as Promise<Job[]>)
  } catch (error) {
    throw new Error('Error fetching jobs')
  }
}
