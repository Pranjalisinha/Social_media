import React, { useState } from "react";
import "./Register.css";
import Logo from "../../img/logo.png";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>FriendsBook</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            <SignUp />
        </div>
    );
};

function SignUp() {
    const navigate = useNavigate()
    const [data, setData] = useState({})

    const handleRegister = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/userRegister/Register", data)
            .then((data) => {
                console.log(data)
                navigate("/Signin")
            })
    }
    const handleImageData = (e, id) =>{
        const files = e.target.files
        const file_data = new FormData()
        file_data.append("file", files[0])
        file_data.append('upload_preset','social-media');
        file_data.append("cloud_name", "dxqgehmg9");
        fetch("https://api.cloudinary.com/v1_1/dxqgehmg9/image/upload", {
            method: "post",
            body:file_data
        }).then((res)=>res.json()).then((data) => setData({[id]: data.url}))
    }
    console.log(data)
    const handleFormData = (e, id) => {
        setData({ ...data, [id]: e.target.value })
    }

    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign up</h3>
                <div>
                    <input
                    type="file" name="ProfilePic" className="infoInput" placeholder="Upload Profile Image" onChange={(e) => handleImageData(e, "ProfilePic")}/>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="infoInput"
                        name="firstname"
                        onChange={(e) => handleFormData(e, "Name")}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="infoInput"
                        name="lastname"
                        onChange={(e) => handleFormData(e, "Sirname")}
                    />
                </div>

                <div>
                    <input
                        type="email"
                        className="infoInput"
                        name="Email"
                        placeholder="Email"
                        onChange={(e) => handleFormData(e, "Email")}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="infoInput"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => handleFormData(e, "Password")}
                    />
                    <input
                        type="text"
                        className="infoInput"
                        name="Address"
                        placeholder="Address"
                        onChange={(e) => handleFormData(e, "Address")}
                    />
                </div>

                <div>
                    <Link to={"/Signin"}><span style={{ fontSize: '12px' }}>Already have an account. Login!</span></Link>
                </div>
                <button className="button infoButton" type="submit" onClick={(e) => handleRegister(e)}>Signup</button>
            </form>
        </div>
    );
}

export default Register;