import { GET, type UserResponseBody } from "@/shared/api"
import { AxiosError } from "axios"

export const feedLoader = async () => {
  try {
    const { data } = await GET<UserResponseBody>("/about")

    return {
      data: data.data,
      error: null,
    }
  } catch (e) {
    let error
    if (e instanceof AxiosError) {
      error = e.response?.data.error ?? e.message
    } else if (typeof e === "string") {
      error = e
    } else {
      error = "Неизвестная ошибка"
    }
    return {
      data: null,
      error,
    }
  }
}

export type FeedLoader = typeof feedLoader
