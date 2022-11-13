import React from "react"
import config from "../config.json"
import Menu from "../src/components/Menu"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"

function HomePage() {
  const homePageStyles = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  }

  const [filterValue, setFilterValue] = React.useState("")

  return (
    <>
      <div style={homePageStyles}>
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <Header />
        <Timeline filterValue={filterValue} playlists={config.playlists} />
        <Favorites profiles={config.favorites} />
      </div>
    </>
  )
}

export default HomePage
