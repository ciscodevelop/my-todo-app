import { Link } from "react-router-dom";
import "./menu.scss";
const Menu = ({ setMenu }: any) => {
    function handleCloseMenu() {
        setMenu(false);
    }
  return (
    <div className="menu">
      <div className="link-menu">
        <Link to="/" onClick={handleCloseMenu}>Home</Link>
        <Link to="/todos" onClick={handleCloseMenu}>Todos</Link>
        <Link to="/login" onClick={handleCloseMenu}>Sign up</Link>
        <Link to="/register" onClick={handleCloseMenu}>Sign in</Link>
        <Link to="/about" onClick={handleCloseMenu}>About</Link>
      </div>
    </div>
  );
};

export default Menu;
