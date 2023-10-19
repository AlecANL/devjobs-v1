import { IconMoon, IconSun } from '@components/icons/icons.tsx'
import {
  SwitchThemeInputStyled,
  SwitchThemeLabelStyled,
  SwitchThemeStyled
} from '@components/switch-theme/switch-theme.styled.tsx'
import { useId } from 'react'
import { useToggleTheme } from '@hooks/use-toggle-theme.ts'

export function SwitchTheme () {
  const inputId = useId()
  const { toggleTheme, isDarkTheme } = useToggleTheme()

  const handleChange = () => {
    toggleTheme()
  }

  return (
    <>
      <SwitchThemeStyled id='theme-toggle'>
        <IconSun/>
        <SwitchThemeInputStyled onChange={handleChange} checked={isDarkTheme} aria-hidden={true} id={inputId} type="checkbox" />
        <SwitchThemeLabelStyled aria-label='switch-theme' htmlFor={inputId}></SwitchThemeLabelStyled>
        <IconMoon/>
      </SwitchThemeStyled>
    </>
  )
}
