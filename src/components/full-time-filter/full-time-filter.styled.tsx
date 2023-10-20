import styled from 'styled-components'

export const FilterFullTimeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  input {
    position: absolute;
    min-width: 0;
    min-height: 0;
    visibility: hidden;
  }
  
  &:not(.visibility) {
    display: none;
  
    @media (min-width: 768px) {
      display: flex;
    }
  }
  
  input:checked + label {
    background-color: var(--violet);
    transition: background-color .3s ease;
  }
  
  input:checked + label svg {
    visibility: visible;
  }
`

export const FilterCheckLabel = styled.label`
  display: block;
  position: relative;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  background-color: var(--current-check-bg);
  border-radius: 3px;
  
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
  }
`
export const FilterTextLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
`
