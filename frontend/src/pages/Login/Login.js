import React, {useState} from "react";
import "./Login.css";
import Logo from "../../img/logo.png";
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'


const LogInUser = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>FriendsBook</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <LogIn/>
    </div>
  );
};
function LogIn() {
    const navigate=useNavigate()
    const [data,setData]=useState({
        "Name":"",
        "Password":""
      })

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/userRegister/Signin",data).then((loginData)=>{
          localStorage.setItem("authorization",loginData.data.Authtoken) 
          localStorage.setItem("username", loginData.data.username)
          localStorage.setItem("ProfilePic", loginData.data.profileImg)
        
        navigate("/Home")
        })
    }
    const handleinput=(e,id)=>{
        setData({...data,[id]:e.target.value})
          }
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="email"
              placeholder="Email"
              className="infoInput"
              name="Email"
              onChange={(e)=>handleinput(e,"Email")}
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="Password"
              onChange={(e)=>handleinput(e,"Password")}
            />
          </div>
  
          <div>
              <Link to={"/"}> <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span></Link>
            <button className="button infoButton" onClick={(e)=>handlesubmit(e)}>Login</button>
          </div>
        </form>
      </div>
    );
  }

export default LogInUser;