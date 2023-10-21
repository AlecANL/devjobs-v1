import styled from 'styled-components'

export const LocationFilterStyled = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
  border-inline: 1px solid var(--filter-section-borders-color);
  padding-inline: 1rem;
  height: 100%;
  
  
  svg path {
    fill: var(--violet);
  }
  
  &:not(.visibility) {
    display: none;
    
    @media (min-width: 768px) {
      display: flex;
    }
  }
`

export const LocationFilterSelect = styled.select<{
  ['datatest-id']?: string
}>`
  flex: 1;
  font-size: 14px;
  border-color: transparent;
  padding-block: 1.3rem;
  background-color: var(--current-card-bg);
  color: var(--current-font-color);
`
