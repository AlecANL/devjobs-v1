import styled from 'styled-components'

export const ModalFilterStyled = styled.form<{
  ['datatest-id']?: string
}>`
  display: flex;
  flex-direction: column;
  padding-block: 0 20px;
  padding-inline: 20px;
  
  div:first-child {
    margin-inline: -20px;
    padding-inline: 20px;
    border-bottom: 1px solid hsla(207, 15%, 88%, 1.00);
  }
  
  div:not(:first-child) {
    padding-block: 1rem;
  }
  
  button {
    border-color: transparent;
    padding-block: 1rem;
    margin-top: .5rem;
    background-color: var(--violet);
    color: var(--just-white);
    font-size: 1rem;
    border-radius: 5px;
    
    &:hover {
      background-color: hsla(233, 74%, 73%, 1.00);
    }
  }
`
