import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ProfileCard = () => {
    const Navigate=useNavigate()
    const [postData, setPostData] = useState([]);
    const Authtoken=localStorage.getItem("authorization")
    const Name = localStorage.getItem("username")
    useEffect(()=>{
        if(Authtoken){
            axios({
                method:'GET',
                url:'http://localhost:3001/userRegister/user',
                headers:{
                    authorization:Authtoken
                }
            })
                .then((data) => {
                    setPostData(data.data.user[0])})
        } else {
            Navigate("/Signin")
        }
    }, [])
  const ProfilePage = true;
  console.log(Name)
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={postData.ProfilePic} alt="" />
      </div>

      <div className="ProfileName">
        <span>{postData.Name + " " + postData.Sirname}</span>
        <span>{postData.Email}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>0</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard