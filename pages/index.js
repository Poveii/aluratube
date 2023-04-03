import React from "react"
import Head from "next/head"
import config from "../config.json"
import Menu from "../src/components/Menu"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"
import { videoService } from "../src/services/videoService"

let isChanged = false
function HomePage() {
  const service = videoService()
  const [filterValue, setFilterValue] = React.useState("")
  const [playlists, setPlaylists] = React.useState({})

  React.useEffect(() => {
    service
      .getAllVideos()
      .select("*")
      .then((response) => {
        const newPlaylists = { ...playlists }
        try {
          response.data.forEach((video) => {
            if (video.isNew === true) return
            if (!newPlaylists[video.playlist]) newPlaylists[video.playlist] = []
            newPlaylists[video.playlist].push(video)
          })
        } catch (err) {
          Object.keys(config.playlists).forEach((playlistName) => {
            Object.values(config.playlists[playlistName]).forEach((video) => {
              if (!newPlaylists[playlistName]) newPlaylists[playlistName] = []
              newPlaylists[playlistName].push(video)
            })
          })
        }
        setPlaylists(newPlaylists)
      })
  }, [isChanged])

  const stopSupabaseServer = () => {
    videoService().supabase.removeAllChannels()
  }

  videoService()
    .supabase.channel("public:videos")
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "videos" },
      (payload) => {
        console.log("Change Received", payload)
        setPlaylists({})
        isChanged = !isChanged
      }
    )
    .subscribe((status) => {
      if (status === "CHANNEL_ERROR") {
        stopSupabaseServer()
      }
    })

  const homePageStyles = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  }
  return (
    <>
      <div style={homePageStyles}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>Poveii - Aluratube</title>
        </Head>

        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <Header />
        <Timeline filterValue={filterValue} playlists={playlists} />
        <Favorites profiles={config.favorites} />
      </div>
    </>
  )
}

export default HomePage
