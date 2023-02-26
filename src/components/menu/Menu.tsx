import { Link } from "react-router-dom";
import "./menu.scss";
const Menu = () => {
  return (
    <div className="menu">
      <div className="link-menu">
        <Link to="">Home</Link>
        <Link to="">Todos</Link>
        <Link to="">Sign up</Link>
        <Link to="">Sign in</Link>
        <Link to="">About</Link>
      </div>
    </div>
  );
};

export default Menu;
