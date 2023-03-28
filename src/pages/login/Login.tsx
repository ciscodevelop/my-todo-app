import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/user/userSlice";
import requestCallAxios from "../../features/axiosIstance/publicRequestAxiosIstance";

const Login = () => {
  const [inputs, setInputs] = useState<any>({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      setError(false);
      const result = await requestCallAxios.post("auth/login", {
        username: inputs.username,
        password: inputs.password,
      });
      dispatch(addUser(result.data));
      navigate("/todos");
    } catch (error) {
      setError(true);
    }
  };

  const handleInputChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    
  };
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLogin} className="input-group">
          <label>Username or Email</label>
          <input
            type="text"
            name="username"
            placeholder="johnDoe/johnDoe@gmail.com"
            onChange={handleInputChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password_123"
            onChange={handleInputChange}
          />
          {error && (
            <div style={{ color: "red", padding: 10 }}>
              Username or Passord Incorrect
            </div>
          )}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
