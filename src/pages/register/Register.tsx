import { useState } from "react";
import "./register.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import requestCallAxios from "../../features/axiosIstance/requestAxiosIstance";

const Register = () => {
  const location = useLocation();
   
  const [inputs, setInputs] = useState<any>({});
 
  const navigate = useNavigate();
  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
       
        await requestCallAxios.post('auth/register',
        { email: inputs.email, password: inputs.password,username: inputs.username})
       navigate('/login')
      
    } catch (error) {
     console.log(error);
     
      
    }
  }
 
  const handleInputChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <div className="register">
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleRegister} className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="jonhDoe"
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={location&&location.state}
            placeholder="jonhDoe@gmail.com"
            onChange={handleInputChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password_123"
            onChange={handleInputChange}
          />
         
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
