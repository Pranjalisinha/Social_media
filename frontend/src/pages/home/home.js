import React from "react";
import FriendSide from "../../component/FriendSide/FriendSide";
import ProfileSide from "../../component/profileside/profileside";
import RightSide from "../../component/RightSide/Rightside";
import "./home.css"

const Home = () =>{
    return(
        <>
        <div className="Home">
           <ProfileSide/>
            <FriendSide/>
            <RightSide/>
        </div>
        </>
    )
}
export default Home