import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import { useAppSelector } from "../../app/hooks";
import { resetUser, selectUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import { resetTodos } from "../../features/todos/todosSlice";

const Navbar = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogout = () => {
    dispatch(resetUser());
    dispatch(resetTodos());
    navigate('/')
    
  };
  return (
    <nav className="navbar">
      <div className="left">
        <h3>Todo App</h3>
      </div>
      <div className="right">
        <Link to="/">Home</Link>

        {user.user != null ? (
          <>
            <Link to="/todos">Todos</Link>
            <Link to="/about">About</Link>
            <div className="profile-container">
          <div className="profile-info">
            <div className="img-pic">
              <img src={user?.user?.profilePic} alt="" />              
            </div>
            <ArrowDropDownOutlined className="icon" />
            <div className="menu">
            <span  >Setting</span>
            <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
