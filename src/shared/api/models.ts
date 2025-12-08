export interface AuthRequestBody {
  username: string
  password: string
}

export interface LoginResponseBody {
  token: string
  error: null
}

export interface LoginResponseErrorBody {
  token: null
  error: string
}

export interface ServerResponseMessage {
  message: string
}

export interface UserResponseBody {
  data: {
    id: number
    username: string
    avatar: string
    about: string
  }
}
