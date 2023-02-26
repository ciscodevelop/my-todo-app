import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Route, Routes,} from "react-router-dom";
import Todos from "./pages/todos/Todos";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useState } from "react";
 
import PrivateRoute from "./core/routes/PrivateRoutes";
import PublicRoutes from "./core/routes/PublicRoutes";
import { useAppSelector } from "./app/hooks";
import { selectUser } from "./features/user/userSlice";
function App() { 
  const user = useAppSelector(selectUser);

  const [menu, setMenu] = useState(false);
  return (
    <div className="app">
      <header className="app-header">
        <Navbar menu={menu} setMenu={setMenu} user={user} />
      </header>
      <main>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<PrivateRoute user={user} />}>
            <Route path="/todos" element={<Todos />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
