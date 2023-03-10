import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { resetUser, selectUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import { resetTodos } from "../../features/todos/todosSlice";
import Menu from "../menu/Menu";

const Navbar = ({menu ,setMenu}:any) => {
  
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetUser());
    dispatch(resetTodos());
    navigate("/");
  };
  return (
    <nav className="navbar">
      {menu && <Menu setMenu={setMenu} user={user} />}
      
      <div className="left">
        
        <Link to={'/'}>
        <h3  >Todo App</h3>
        </Link>
      </div>
      <div className="right">
        <div className="link-navbar">
          <Link to="/">Home</Link>
        </div>

        {user.user != null ? (
          <>
            <div className="link-navbar">
              <Link to="/todos">Todos</Link>
              <Link to="/about">About</Link>
            </div>

            <div className="profile-container">
              <div className="profile-info">
                <div className="img-pic">
                  <img src={user.user?.profilePic?user.user.profilePic:'asset/img/avatarProfile.png'} alt="" />
                </div>
                <ArrowDropDownOutlined className="icon-arrow" />
                <div className="menu-profile">
                  <span>Setting</span>
                  <span onClick={handleLogout}>Logout</span>
                </div>
              </div>
            </div>
          </>
        ) : (
            <>
              <div className="link-navbar">

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
              </div>
          </>
        )}
        <div className="container-menu" onClick={() => setMenu(!menu)}>
          <div className={menu ? "menu-burger menu-open" : "menu-burger"}>
            <span className="s1" />
            <span className="s2" />
            <span className="s3" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
