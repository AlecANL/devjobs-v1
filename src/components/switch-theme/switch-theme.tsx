import { IconMoon, IconSun } from '@components/icons/icons.tsx'
import {
  SwitchThemeInputStyled,
  SwitchThemeLabelStyled,
  SwitchThemeStyled
} from '@components/switch-theme/switch-theme.styled.tsx'
import { useId } from 'react'

export function SwitchTheme () {
  const inputId = useId()

  return (
    <>
      <SwitchThemeStyled>
        <IconSun/>
        <SwitchThemeInputStyled aria-hidden={true} id={inputId} type="checkbox" />
        <SwitchThemeLabelStyled aria-label='switch-theme' htmlFor={inputId}></SwitchThemeLabelStyled>
        <IconMoon/>
      </SwitchThemeStyled>
    </>
  )
}
