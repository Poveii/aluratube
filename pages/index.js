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
  return <div>Header</div>
}

function Timeline() {
  return <div>Timeline</div>
}
