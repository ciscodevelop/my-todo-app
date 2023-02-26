import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Todos from "./pages/todos/Todos";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useState } from "react";
import { useAppSelector } from "./app/hooks";
import { selectUser } from "./features/user/userSlice";
import PrivateRoute from "./core/routes/PrivateRoutes";
import PublicRoutes from "./core/routes/PublicRoutes";

function App() {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <div className="app">
      <header className="app-header">
        <Navbar menu={menu} setMenu={setMenu} />
      </header>
      <main>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/todos" element={<Todos />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
