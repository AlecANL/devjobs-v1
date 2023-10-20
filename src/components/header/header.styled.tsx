import styled from 'styled-components'

export const HeaderStyled = styled.header`
  min-height: 136px;
  background-image: var(--current-pattern);
  background-size: cover;
  
  @media (min-width: 768px) {
    min-height: 160px;
  }
`

export const HeaderContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  max-inline-size: var(--max-length);
  margin: 0 auto;
  color: var(--just-white);
  
  h1, a {
    color: inherit;
  }
`
