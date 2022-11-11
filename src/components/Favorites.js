import styled from "styled-components"

const StyledFavorites = styled.div`
  width: 100%;
  padding: 12px 32px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  div {
    display: flex;
    gap: 8px;
  }
  a {
    display: grid;
    justify-items: center;
  }
  img {
    width: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    font-size: 0.875rem;
    margin-top: 8px;
    color: ${({ theme }) => theme.textColorBase || "#222222"};
  }
`

export default function Favorites(props) {
  const aluraProfiles = props.profiles
  return (
    <StyledFavorites>
      <h2>AluraTubes Favoritos</h2>

      <div>
        {aluraProfiles.map((aluraProfile, index) => {
          return (
            <a key={index} href={aluraProfile.link}>
              <img src={aluraProfile.image} alt="" />
              <span>@{aluraProfile.name}</span>
            </a>
          )
        })}
      </div>
    </StyledFavorites>
  )
}
