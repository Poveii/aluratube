import React from "react"

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {
    alert("You need to configure me first!")
  },
  toggleMode: () => {
    alert("You need to configure me first!")
  },
})

export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode)

  function toggleMode() {
    mode === "dark" ? setMode("light") : setMode("dark")
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {props.children}
    </ColorModeContext.Provider>
  )
}
