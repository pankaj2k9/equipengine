import React from 'react'
// components
import { ThemeProvider as RootThemeProvider } from 'styled-components'

// Theme styles
const theme = {
  primaryDark: '#125eb7',
  primary: '#338FFC',
  black: '#000000',
  lightblack: '#9C9C9C',
  lightgray: '#dadada',
  gray: '#d8d8d8',
  fontFamily: 'karla, sans-serif'
}

const ThemeProvider = ({children}) => (
  <RootThemeProvider theme={theme}>
    {children}
  </RootThemeProvider>
)

export default ThemeProvider
