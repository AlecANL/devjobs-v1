import { HeaderContainerStyled, HeaderStyled } from '@components/header/header.styled.tsx'
import { SwitchTheme } from '@components/switch-theme'

export function Header () {
  return (
    <HeaderStyled>
      <HeaderContainerStyled>
        <h1>Devjobs</h1>
        <SwitchTheme/>
      </HeaderContainerStyled>
    </HeaderStyled>
  )
}
