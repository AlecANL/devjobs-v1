import { HeaderContainerStyled, HeaderStyled } from '@components/header/header.styled.tsx'
import { SwitchTheme } from '@components/switch-theme'
import { Link } from 'react-router-dom'

export function Header () {
  return (
    <HeaderStyled>
      <HeaderContainerStyled>
        <h1>
          <Link to={'/'} >
            Devjobs
          </Link>
        </h1>
        <SwitchTheme/>
      </HeaderContainerStyled>
    </HeaderStyled>
  )
}
