import { Outlet ,Navigate, Route } from "react-router-dom"
import Home from "../../pages/home/Home"
import About from "../../pages/about/About"
import Login from "../../pages/login/Login"
import Register from "../../pages/register/Register"

const PublicRoutes = () => {
  return (
    <>
    <Outlet></Outlet>
    </>
  )
}

export default PublicRoutes