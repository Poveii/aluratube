import React from "react"
import { ThemeProvider } from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/Menu/components/ColorMode"

export default function MyApp({ Component, pageProps }) {
  const theme = {
    light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
    },
    dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
    },
  }

  const context = React.useContext(ColorModeContext)

  return (
    <ColorModeProvider>
      <ThemeProvider theme={theme[context.mode]}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeProvider>
  )
}
