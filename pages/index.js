import config from "../config.json"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"

function HomePage() {
  const homePageStyles = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  }

  return (
    <>
      <CSSReset />
      <div style={homePageStyles}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}

export default HomePage
