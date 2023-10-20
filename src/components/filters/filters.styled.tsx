import styled from 'styled-components'

export const FiltersContainer = styled.section`
  padding-inline: 1.5rem;
  margin-block: -40px 60px;
`

export const FiltersContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-inline-size: var(--max-length);
  margin-inline: auto;
  background-color: var(--current-card-bg);
  border-radius: 6px;
  padding-inline: 1rem;
  min-height: 80px;
  
  .btn-filters {
    background-color: transparent;
    border-color: transparent;
  }
  
  button svg path {
    fill: var(--icon-filter-color);
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 300px 275px;
    
    .btn-filters {
      display: none;
    }
  }
`

export const FilterSearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
  
  button {
    flex: 1;
  }
`
