import styled from "styled-components"
import DarkModeSwitch from "../src/components/Menu/components/DarkModeSwitch"
import { useRouter } from "next/router"

const StyledVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`

export default function Video() {
  const router = useRouter()
  const { id } = router.query

  return (
    <StyledVideoWrapper>
      <a href="/">← Voltar</a>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <DarkModeSwitch />
    </StyledVideoWrapper>
  )
}
