import { useParams } from 'react-router-dom'
import {
  DetailHeader,
  DetailInfoRow,
  DetailJobDescription,
  DetailJobHowToApplySectionStyled, DetailJobLogoStyled,
  DetailJobRequirementsSectionStyled,
  DetailJobRoleSectionStyled,
  DetailJobSectionStyled,
  DetailStyled, FooterJobDetail, FooterStyled, FooterWrapperStyled,
  LinkStyled, LinkStyledSecondary, NotFoundCardStyled
} from '@pages/detail/detail.styled.tsx'
import { useDetailJob } from '@hooks/use-detail.ts'

export default function Detail () {
  const { id } = useParams()
  const { jobState: { job, error, loading } } = useDetailJob(id)

  const localHostUrl = import.meta.env.PROD ? '' : '/public'
  const imageJob = (imgUrl: string | undefined) => `${localHostUrl}${String(imgUrl).slice(1)}`
  const isShowJob = !loading && !error && job
  const isShowError = (!loading && error && !job) || (!loading && !error && !job)
  const isLoading = loading && !error && !job

  return (
    <>
      {
        isShowError
          ? (
          <>
            <NotFoundCardStyled>
              <img src='/assets/images/not-found.png' alt='not found job'/>
              <p>Job width id <strong> { id } </strong>  not found. Try with another id. </p>
            </NotFoundCardStyled>
          </>
            )
          : null
      }

      {
        isLoading
          ? (
            <>
              <p>Loading...</p>
            </>
            )

          : null
      }

      {
        isShowJob
          ? (
          <>
            <DetailStyled>
              <DetailJobHowToApplySectionStyled>
                <DetailJobLogoStyled color={`${job?.logoBackground}`}>
                  <img src={imageJob(job?.logo)} alt={job?.company}/>
                </DetailJobLogoStyled>
                <h2>{job?.company}</h2>
                <span>{job?.website}</span>
                <LinkStyledSecondary className='button' href={job?.website} target='_blank'>Company site</LinkStyledSecondary>
              </DetailJobHowToApplySectionStyled>
              <DetailJobSectionStyled>
                <DetailHeader>
                  <DetailInfoRow>
                    <span>{job?.postedAt}</span>
                    <span>{job?.contract}</span>
                  </DetailInfoRow>
                  <h2 className='title'>{job?.position}</h2>
                  <p className='location'>{job?.location}</p>
                  <LinkStyled className='button' href={job?.website} target='_blank'>Apply now</LinkStyled>
                </DetailHeader>
                {
                  job?.description
                    ? (<DetailJobDescription>{job.description}</DetailJobDescription>)
                    : null
                }
                {
                  job?.requirements
                    ? (
                      <DetailJobRequirementsSectionStyled>
                        <h3>Requirements</h3>
                        <DetailJobDescription>{job.requirements.content}</DetailJobDescription>
                        <ul>
                          {
                            job.requirements.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            )
                            )
                          }
                        </ul>
                      </DetailJobRequirementsSectionStyled>
                      )
                    : null
                }
                {
                  job?.role
                    ? (
                      <DetailJobRoleSectionStyled>
                        <h3>What you will do</h3>
                        <DetailJobDescription>{job.role.content}</DetailJobDescription>
                        <ol>
                          {
                            job.role.items.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))
                          }
                        </ol>
                      </DetailJobRoleSectionStyled>
                      )
                    : null
                }
              </DetailJobSectionStyled>
            </DetailStyled>
            <FooterStyled>
              <FooterWrapperStyled>
                <FooterJobDetail>
                  <h2>{job?.company}</h2>
                  <span>{job?.location}</span>
                </FooterJobDetail>
                <LinkStyled target='_blank' href={job?.website}>apply now</LinkStyled>
              </FooterWrapperStyled>
            </FooterStyled>
          </>
            )
          : null
      }

    </>
  )
}
