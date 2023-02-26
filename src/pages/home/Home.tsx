import { Link, useNavigate } from "react-router-dom";
import "./home.scss";
import { useState } from "react";
import screenshotApp from "../../asset/img/screenshotApp.png";
import { EmailOutlined } from "@mui/icons-material";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";

const Home = () => {
  const navigate = useNavigate()
  const user=useAppSelector(selectUser)
  const [email, setEmail] = useState('')
  
  function handleClick(e: any) {
    e.preventDefault();    
    if (!user.user) {      
      navigate('/register',{state: email})  
    }else{navigate('/todos')}
    
  }
  return (
    <div className="home">
        <div className="container">
      <div className="left">

        <h1>Organize your notes, and tasks all in this app</h1>
        <h4>
          Can Organize you quotidiane activity, just make click on Get Started
          and you are ready all for free
        </h4>
        <div className="input-email">
          
          <EmailOutlined className="icon-email" />
          <input type="text" placeholder="Enter your email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="button-start">
          <button onClick={handleClick}>Get Started</button>
          <h5>Free Forever </h5>
        </div>
      </div>
      <div className="right">
        <div className="img-app">
          <img src={screenshotApp} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
