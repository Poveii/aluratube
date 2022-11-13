import styled from "styled-components"
import config from "../../config.json"

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  padding-top: 56px;

  #profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    width: 100%;
    padding: 16px;

    display: flex;
    align-items: center;
    gap: 16px;
  }
`

const StyledBanner = styled.div`
  height: 230px;
  background: #222222 url(${({ banner }) => banner}) no-repeat center/cover;
`
export default function Header() {
  return (
    <StyledHeader>
      <StyledBanner
        banner={config.banner}
        role="img"
        aria-label="Foto de um tela com códigos de programação"
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
