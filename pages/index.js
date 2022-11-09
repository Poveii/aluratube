import config from "../config.json"

function HomePage() {
  const homePageStyles = { backgroundColor: "red" }

  return (
    <div style={homePageStyles}>
      <Menu />
      <Header />
      <Timeline />
    </div>
  )
}

export default HomePage

function Menu() {
  return <div>Menu</div>
}

function Header() {
  return (
    <div>
      {/* <img src="" alt="" /> */}
      <img src={`https://github.com/${config.github}.png`} />
      <h2>{config.name}</h2>
      <p>{config.job}</p>
    </div>
  )
}

function Timeline() {
  return <div>Timeline</div>
}
