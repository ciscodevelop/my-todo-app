import { Link } from "react-router-dom";
import "./menu.scss";
const Menu = () => {
  return (
    <div className="menu">
      <div className="link-menu">
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/login">Sign up</Link>
        <Link to="/register">Sign in</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Menu;
