import styled from 'styled-components'

export const ButtonStyled = styled.button`
  &.primary {
    border-color: transparent;
    padding-block: 1rem;
    background-color: var(--violet);
    color: var(--just-white);
    font-size: 1rem;
    border-radius: 5px;

    &:hover {
      background-color: hsla(233, 74%, 73%, 1.00);
    }
  }
`
