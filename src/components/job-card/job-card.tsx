import { type Job } from '@models/job.interface.ts'
import { JobCardCompany, JobCardHeader, JobCardLocation, JobCardStyled } from '@components/job-card/job-card.styled.tsx'
import { useNavigate } from 'react-router-dom'

interface Props {
  job: Job
}

export function JobCard (props: Props) {
  const { job } = props
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/detail/${job.id}`)
  }

  return (
    <JobCardStyled onClick={handleNavigate}>
      <img src={job.logo} alt={job.company}/>
      <JobCardHeader>
        <span> {job.postedAt} </span> <span> {job.contract} </span>
      </JobCardHeader>
      <div>
        <h3> {job.position} </h3>
        <JobCardCompany> {job.company} </JobCardCompany>
      </div>
      <JobCardLocation> {job.location} </JobCardLocation>
    </JobCardStyled>
  )
}
