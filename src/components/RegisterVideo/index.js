import React from "react"
import { StyledRegisterVideo } from "./styles"

function useForm(formProps) {
  const [values, setValues] = React.useState(formProps.initialValues)

  return {
    values,
    handleChange: (event) => {
      const value = event.target.value
      const name = event.target.name

      const videoThumb =
        name === "url"
          ? `https://img.youtube.com/vi/${
              value.split("v=", 11)[1]
            }/hqdefault.jpg`
          : "https://img.youtube.com/vi//hqdefault.jpg"

      setValues({
        ...values,
        [name]: value,
        thumb: videoThumb,
      })
    },
    clearForm() {
      setValues({})
    },
  }
}

export default function RegisterVideo() {
  const formRegister = useForm({
    initialValues: {
      title: "",
      url: "",
      thumb: "",
    },
  })
  const [visibilityForm, setVisibilityForm] = React.useState(true)

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setVisibilityForm(true)}>
        +
      </button>

      {visibilityForm && (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setVisibilityForm(false)
            formRegister.clearForm()
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setVisibilityForm(false)}
            >
              X
            </button>

            <input
              placeholder="Título do vídeo"
              name="title"
              value={formRegister.values.title}
              onChange={formRegister.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formRegister.values.url}
              onChange={formRegister.handleChange}
            />
            <button type="submit">Cadastrar</button>

            <img src={formRegister.values.thumb} alt="" />
            <p>{formRegister.values.title}</p>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}
