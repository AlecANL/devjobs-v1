import { ButtonStyled } from '@components/button/button.styled.tsx'
import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'neutral'
}
export function Button (props: Props) {
  const { children, variant, ...rest } = props

  const variantClass = variant ?? 'neutral'

  return (
    <>
      <ButtonStyled className={`${variantClass}`} {...rest}>
        {children}
      </ButtonStyled>
    </>
  )
}
