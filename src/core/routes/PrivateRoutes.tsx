import { Outlet,Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";

const PrivateRoutes = () => {
  const user = useAppSelector(selectUser);
  console.log('user in private routes'+user);
  
  return (
    user.user?<Outlet/>:<Navigate to={'/'}/>
  )
}

export default PrivateRoutes