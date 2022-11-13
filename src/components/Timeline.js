import styled from "styled-components"

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  margin-top: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 12px 16px;
    div {
      width: calc(100vw - 12px * 4);
      padding-bottom: 16px;
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          display: block;
          font-weight: bold;
          padding: 8px 24px 2px 0px;
        }
        span,
        p {
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`

export default function Timeline({ filterValue, ...props }) {
  const playlistNames = Object.keys(props.playlists)
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase()
                  const filterValueNormalized = filterValue.toLowerCase()
                  return titleNormalized.includes(filterValueNormalized)
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} alt="" />
                      <span>{video.title}</span>
                      <p>{video.owner}</p>
                    </a>
                  )
                })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
