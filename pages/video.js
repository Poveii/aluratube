import React from "react"
import { ColorModeContext } from "../src/components/Menu/components/ColorMode"

export default function Video() {
  const context = React.useContext(ColorModeContext)

  return (
    <div>
      <h1>Video</h1>
      <p>{context.mode}</p>
      <button onClick={() => context.toggleMode()}>trocar modo</button>
    </div>
  )
}
