import styled from 'styled-components'

export const JobCardStyled = styled.li`
  position: relative;
  background-color: var(--current-card-bg);
  border-radius: 6px;
  padding: 2rem;
  box-shadow: var(--box-shandow);
  display: flex;
  flex-direction: column;
  gap: 44px;
  
  @media (min-width: 1024px) {
    max-width: 350px;
  }
`

export const JobCardHeader = styled.div`
  color: var(--dark-grey);
  margin-top: 1.5rem;
  display: flex;
  gap: 12px;
  align-items: center;

  span {
    display: flex;
    gap: 12px;
    align-items: center;

  }

  span:not(:last-child):after {
    content: '•';
    display: inline-block;
    margin-top: 5px;
  }
`

export const JobCardLocation = styled.span`
  color: var(--violet);
`

export const JobCardCompany = styled.p`
  color: var(--dark-grey);
`

export const JobImageFigure = styled.figure<{
  color: string
}>`
  position: absolute;
  margin: 0;
  padding: 0;
  top: -1rem;
  background-color: ${({ color }) => color};
  width: 50px;
  height: 50px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const JobCardInfo = styled.div``

export const JobCardTitle = styled.div`
  h3 {
    margin-block: 1rem;
  }
`
