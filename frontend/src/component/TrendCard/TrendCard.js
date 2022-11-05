import React, { useEffect, useState } from 'react'
import './TrendCard.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TrendCard = () => {
  const Navigate=useNavigate()
  const [friend, setFriend] = useState([])
  const Authtoken=localStorage.getItem("authorization")
  useEffect(()=>{
    if(Authtoken){
        axios({
            method:'GET',
            url:'http://localhost:3001/friends/myfriend',
            headers:{
                authorization:Authtoken
            }
        })
            .then((data) => {
                setFriend(data.data)})
    } else {
        Navigate("/Signin")
    }
}, [])
console.log(friend)
  return (
    <div className="TrendCard">
            <h3>My Friends</h3>
            {friend.map((friend, id)=>{
                return(
                    <div className="trend">
                        <span>#{friend.Name}</span>
                        <span>{friend.Name}</span>
                    </div>
                )
            })}

    </div>
  )
}

export default TrendCard