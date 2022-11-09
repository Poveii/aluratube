import config from "../config.json"
import styled from "styled-components"

function HomePage() {
  const homePageStyles = { backgroundColor: "red" }

  return (
    <div style={homePageStyles}>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists} />
    </div>
  )
}

export default HomePage

function Menu() {
  return <div>Menu</div>
}

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

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists)

  return (
    <div>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumbnail} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
