import { Outlet,Navigate } from "react-router-dom";

const PrivateRoutes = ({user}:any) => {
  
  console.log('user in private routes'+user);
  
  return (
    user.user?<Outlet/>:<Navigate to={'/'}/>
  )
}

export default PrivateRoutes