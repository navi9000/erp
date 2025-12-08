import { SERVER_ROOT } from "@/shared/config"
import axios from "axios"
import {
  formatToken,
  readToken,
  saveToken,
  clearToken,
  isTokenSaved,
} from "./token"

const instance = axios.create({
  baseURL: SERVER_ROOT,
  headers: {
    common: {
      Authorization: formatToken(readToken()),
    },
  },
})

const GET = instance.get
const POST = instance.post

const setJWT = (token: string) => {
  saveToken(token)
  instance.defaults.headers.common["Authorization"] = formatToken(token)
}

const clearJWT = () => {
  clearToken()
  instance.defaults.headers.common["Authorization"] = undefined
}

const isAuth = isTokenSaved

export { GET, POST, setJWT, clearJWT, isAuth }
