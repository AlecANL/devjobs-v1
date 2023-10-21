import styled from 'styled-components'

export const SwitchThemeStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: .5rem;
  min-inline-size: 120px;
  justify-content: flex-end;
`

export const SwitchThemeInputStyled = styled.input`
  position: absolute;
  min-height: 0;
  visibility: hidden;
  min-width: 0;
  
  &:checked + label:before {
    transform: translate(160%, -50%);
  }
`

export const SwitchThemeLabelStyled = styled.label`
  display: block;
  inline-size: 100%;
  max-inline-size: 48px;
  min-block-size: 1.5rem;
  background-color: var(--just-white);
  border-radius: 100px;
  padding-inline: 5px;
  transition: transform .3s ease-in-out;
  
  &:before {
    position: absolute;
    top: 50%;
    content: '';
    display: block;
    inline-size: 14px;
    block-size: 14px;
    border-radius: 100%;
    background-color: var(--violet);
    transform: translate(0, -50%);
    transition: transform .3s ease-in-out;
  }
`
