import React from "react"
import { StyledRegisterVideo } from "./styles"

const validate = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = "Faltou você colocar o título do vídeo!"
  } else if (values.title.length > 25) {
    errors.title = "O título tem que ter pelo menos 25 caracteres."
  }
  if (!values.url) {
    errors.url = "Faltou você colocar o link do vídeo!"
  } else if (!/youtube.com/.test(values.url)) {
    errors.url = "Esse link não é do youtube.com, favor colocar um link válido."
  }

  return errors
}

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
    handleSubmit(values, e) {
      let isFine = false
      const errors = validate(values)
      const error = Object.values(errors)[0]
      if (error !== undefined) {
        alert(error)
        e.preventDefault()
        return !isFine
      }

      e.preventDefault()
      return isFine
    },
    clearForm() {
      setValues({})
    },
  }
}

function getVideoThumb(url) {
  return `https://img.youtube.com/vi/${
    url?.split("v=", 11)[1]?.split("&")[0]
  }/hqdefault.jpg`
}

export default function RegisterVideo() {
  const formRegister = useForm({
    initialValues: {
      title: "",
      url: "",
      thumb: "",
    },
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
            const validation = formRegister.handleSubmit(
              formRegister.values,
              event
            )

            if (validation === false) {
              setVisibilityForm(false)
              formRegister.clearForm()
            }
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

            <img
              src={
                formRegister.values.url.length > 42
                  ? getVideoThumb(formRegister.values.url)
                  : ""
              }
              alt=""
            />
            <p>{formRegister.values.title}</p>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}

/*
  - [x] Criar as regras dos inputs
  - [ ] Passar as regras para o UseForm
  - [ ] Mostrar um alerta caso tenha algum conteúdo na variável errors
*/
