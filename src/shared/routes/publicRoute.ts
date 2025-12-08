import { redirect, type LoaderFunctionArgs } from "react-router"
import { isAuth } from "../api"

export const publicRoute = <Args extends LoaderFunctionArgs>(
  callback: Function = () => {}
) => {
  return (args?: Args) => {
    if (isAuth()) {
      throw redirect("/")
    }
    return callback(args)
  }
}
