import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../img/logo.png'
// import {UilSearch} from '@iconscout/react-unicons'
import "./LogoSearch.css"

const LogoSearch = () =>{
    const Navigate = useNavigate();
   const handleLogout = () =>{
    localStorage.setItem("authorization", "")
    localStorage.setItem("Username", "")
    Navigate("/Signin");
   }

    return(
        <>
            <div className="LogoSearch">
                <img src={Logo} alt="" />
                <div className="Search">
                    <input type="text" placeholder='#Explore' />
                    <div className="s-icon">
                    <span class="material-symbols-outlined">
search
</span>
                    </div>
                </div>
                <div className="logout">
            <button className="s-icon" onClick={()=> {handleLogout()}}>Logout</button>
        </div>
            </div>
        </>
    )
}
export default LogoSearch;