import styled from 'styled-components'

export const TitleFilterStyled = styled.div`
  flex-grow: 1;
  svg {
    display: none;
  }
  
  @media (min-width: 768px) {
    svg {
      display: block;
    }
    
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`

export const TitleFilterInput = styled.input`
  min-block-size: 2.5rem;
  inline-size: 100%;
  border-color: transparent;
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  background-color: var(--current-card-bg);
  color: var(--current-font-color);
  
  &:focus {
    outline: 1px solid var(--current-font-color);
  }
`
