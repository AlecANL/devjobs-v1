import styled from 'styled-components'

export const HomeMain = styled.main`
  max-inline-size: var(--max-length);
  margin-inline: auto;
  padding-inline: 1.5rem;
  
  @media (min-width: 768px) {
    margin-top: 145px;
  }
`

export const JobList = styled.ul`
  
  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }
`
