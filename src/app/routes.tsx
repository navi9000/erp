import { FeedPage, feedLoader, logoutAction } from "@/pages/feed"
import { loginAction, LoginPage } from "@/pages/login"
import { RegisterPage, singInAction } from "@/pages/register"
import { protectedRoute, publicRoute } from "@/shared/routes"
import type { FC } from "react"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedPage />,
    loader: protectedRoute(feedLoader),
    action: logoutAction,
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: publicRoute(),
    action: loginAction,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: publicRoute(),
    action: singInAction,
  },
])

const Routes: FC = () => {
  return <RouterProvider router={router} />
}

export default Routes
