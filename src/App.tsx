import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Todos from "./pages/todos/Todos";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="app">
      <header className="app-header">
        <Navbar menu={menu} setMenu={setMenu} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/about" element={<About/>} />
           
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
