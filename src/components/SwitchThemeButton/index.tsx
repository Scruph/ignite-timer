import { ReactNode } from 'react'
import { Container } from './styles'

interface SwitchThemeButtonProps {
  children: ReactNode
}

export function SwitchThemeButton({ children }: SwitchThemeButtonProps) {
  return <Container>{children}</Container>
}
