import styled from "styled-components"
import config from "../../config.json"

const StyledHeader = styled.div`
  padding-top: 56px;

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }

  #profile {
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
export default function Header(props) {
  return (
    <StyledHeader>
      <img
        src={props.banner}
        alt="Foto de um tela com códigos de programação"
      />
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="Foto do Pablo Gabriel olhando pra frente"
          id="profile"
        />

        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}
