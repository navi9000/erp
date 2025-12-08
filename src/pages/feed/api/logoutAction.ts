import { clearJWT } from "@/shared/api"
import { redirect } from "react-router"

export const logoutAction = () => {
  clearJWT()
  return redirect("/login")
}
