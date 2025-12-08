import {
  GET,
  type ServerResponseMessage,
  type UserResponseBody,
} from "@/shared/api"
import type { AxiosResponse } from "axios"

export const feedLoader = async () => {
  try {
    const { data, status, statusText } = await GET<
      undefined,
      AxiosResponse<UserResponseBody | ServerResponseMessage>
    >("/about")
    if (status === 200 && "data" in data) {
      return {
        data: data.data,
        error: null,
      }
    }
    throw statusText
  } catch (e) {
    let error
    if (e instanceof Error) {
      error = e.message
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
