import React, { useState, useRef, useEffect } from "react";
import "./Friend.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FriendCard = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const Navigate=useNavigate()
  const [postData, setPostData] = useState([]);
  const Authtoken=localStorage.getItem("authorization")
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
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={postData.ProfilePic} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
           <span class="material-symbols-outlined">
add_a_photo
</span>
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <span class="material-symbols-outlined">
play_circle
</span>
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
          <span class="material-symbols-outlined">
location_on
</span>
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
          <span class="material-symbols-outlined">
calendar_month
</span>
            Shedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {/* {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )} */}


      </div>
    </div>
  );
};

export default FriendCard;