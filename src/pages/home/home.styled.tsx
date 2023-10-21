import styled from 'styled-components'

export const HomeMain = styled.main`
  max-inline-size: var(--max-length);
  margin-inline: auto;
  padding-inline: 1.5rem;
  margin-block: 2.5rem;
  
  @media (min-width: 480px) {
    margin-block: 3.5rem;
  }
  
  @media (min-width: 768px) {
    margin-block: 145px;
  }
`

export const JobList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 65px;
  }
`
