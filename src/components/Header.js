import styled from "styled-components"
import config from "../../config.json"

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    width: 100%;
    margin-top: 56px;
    padding: 16px 32px;

    display: flex;
    align-items: center;
    gap: 16px;
  }
`
export default function Header() {
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
