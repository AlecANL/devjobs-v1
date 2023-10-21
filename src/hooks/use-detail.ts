import { useEffect, useState } from 'react'
import { getJobs } from '@/utils/jobs.utils.ts'
import { type JobState } from '@models/job-state.interface.ts'

export function useDetailJob (id: string | undefined) {
  const [jobState, setJobState] = useState<JobState>({
    job: undefined,
    loading: true,
    error: false
  })

  useEffect(() => {
    getJobs()
      .then(job => {
        const jobDetail = job.find(job => String(job.id) === id ?? '0')
        if (!jobDetail) {
          setJobState({
            ...jobState,
            job: undefined,
            loading: false,
            error: true
          })
        } else {
          setJobState({
            ...jobState,
            job: jobDetail,
            loading: false,
            error: false
          })
        }
      })
      .catch(() => {
        setJobState({
          job: undefined,
          loading: false,
          error: true
        })
      })
  }, [id])

  useEffect(() => {
    if (jobState.job) {
      document.title = `Devjobs | ${jobState.job.position}`
    }
  }, [id, jobState])

  return {
    jobState
  }
}
