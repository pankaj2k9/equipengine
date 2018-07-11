import React from "react"
// components
import { ThemeProvider as RootThemeProvider } from "styled-components"

// Theme styles
const theme = {
  primaryDark: "#125eb7", // dark blue
  primary: "#338ffc", // light blue

  // base colors
  black: "#000000",
  gray: "#9fa6ad",
  white: "#fff",
  red: "#f44336",

  // light color versions
  lightblack: "#9c9c9c",
  lightgray: "#dadada",

  // dark color versions
  darkgray: "#4e4e4e",

  fontFamily: "karla, sans-serif"
}

const ThemeProvider = ({ children }) => (
  <RootThemeProvider theme={theme}>{children}</RootThemeProvider>
)

export default ThemeProvider
