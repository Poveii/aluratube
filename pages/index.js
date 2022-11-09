import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import Timeline from "../src/components/Timeline"

function HomePage() {
  const homePageStyles = {}

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

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    width: 100%;
    padding: 16px 32px;

    display: flex;
    align-items: center;
    gap: 16px;
  }
`
function Header() {
  return (
    <StyledHeader>
      {/* <img src="" alt="" /> */}
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="Foto do Pablo Gabriel olhando pra frente"
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}
