import { useState } from 'react'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { CyclesContextProvider } from './contexts/CyclesContext'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { defaultTheme } from './styles/themes/default'
import { SwitchThemeButton } from './components/SwitchThemeButton'

import iconSun from './assets/icon-sun.svg'
import iconMoon from './assets/icon-moon.png'

export function App() {
  const [isLightTheme, setIsLightTheme] = useState(false)

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : defaultTheme}>
      <SwitchThemeButton>
        <button onClick={() => setIsLightTheme(!isLightTheme)}>
          {isLightTheme ? (
            <img src={iconMoon} alt="ícone de sol cor preto" />
          ) : (
            <img src={iconSun} alt="ícone de sol cor preto" />
          )}
        </button>
      </SwitchThemeButton>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
