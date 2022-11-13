import React from "react"
import { StyledRegisterVideo } from "./styles"

function useForm(formProps) {
  const [values, setValues] = React.useState(formProps.initialValues)

  return {
    values,
    handleChange: (event) => {
      const value = event.target.value
      const name = event.target.name
      setValues({
        ...values,
        [name]: value,
      })
    },
    clearForm() {
      setValues({})
    },
  }
}

export default function RegisterVideo() {
  const formRegister = useForm({
    initialValues: { title: "", url: "" },
  })
  const [visibilityForm, setVisibilityForm] = React.useState(false)

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
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}
