import { redirect, type LoaderFunctionArgs } from "react-router"
import { isAuth } from "../api"

export const protectedRoute = <Args extends LoaderFunctionArgs>(
  callback: Function = () => {}
) => {
  return (args?: Args) => {
    if (!isAuth()) {
      throw redirect("/login")
    }
    return callback(args)
  }
}
