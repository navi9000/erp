import { POST, setJWT, type LoginResponseBody } from "@/shared/api"
import { AxiosError } from "axios"
import { redirect } from "react-router"

type Errors = {
  username?: string
  password?: string
}

export const loginAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData()
  const username = formData.get("username")
  const password = formData.get("password")

  const errors: Errors = {}

  if (!username?.toString().trim()) {
    errors.username = "Введите имя"
  }

  if (!password?.toString().trim()) {
    errors.password = "Введите пароль"
  }

  if (Object.entries(errors).length) {
    return {
      errors,
    }
  }

  try {
    const { data } = await POST<LoginResponseBody>("/login", {
      username,
      password,
    })

    setJWT(data.token)

    return redirect("/")
  } catch (e) {
    let error
    if (e instanceof AxiosError) {
      error = e.response?.data.error ?? e.message
    } else if (typeof e === "string") {
      error = e
    } else {
      e = "Неизвестная ошибка"
    }

    return {
      errors: {
        username: error,
        password: error,
      },
    }
  }
}
