import {
  POST,
  setJWT,
  type AuthRequestBody,
  type LoginResponseBody,
  type LoginResponseErrorBody,
} from "@/shared/api"
import type { AxiosResponse } from "axios"
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
    const { data } = await POST<
      AuthRequestBody,
      AxiosResponse<LoginResponseBody | LoginResponseErrorBody>
    >("/login", {
      username,
      password,
    })

    if (typeof data.error === "string") {
      errors.username = data.error
      errors.password = data.error
      return {
        errors,
      }
    }

    setJWT(data.token)

    return redirect("/")
  } catch (e) {
    errors.username = "Неизвестная ошибка"
    errors.password = "Неизвестная ошибка"

    return {
      errors,
    }
  }
}
