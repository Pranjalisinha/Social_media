import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FollowersCard = () => {
    const [allUser, setAllUser] = useState([])
    const Authtoken=localStorage.getItem("authorization")
    const Name = localStorage.getItem("username")
    useEffect(()=>{
        axios({
            method:'GET',
            url:'http://localhost:3001/userRegister/allUser',
        })
            .then((data) =>{
                setAllUser(data.data)
            })
    }, [])
    let newData = [];
    for(let i=0; i<allUser.length; i++){
        if(allUser[i].Name != Name){
            newData.push(allUser[i]);
        }
    }
    const handleFollow = (e, name, sirname, photo) =>{
            e.preventDefault();
                axios({method:'POST',
                url:"http://localhost:3001/friends/add",
                    data:{
                        Name: name + " " + sirname,
                        ProfilePic: photo
                    },
                    headers : {
                     authorization: Authtoken,
                     "Content-Type": "application/json"
                    },
                }).then((res) => {
                   console.log(res)
               
                  }).catch((err) => {
                   console.log(err)
                  })
                  window.location.reload(false)
        }

  return (
    <div className="FollowersCard">
        <h3>Add Friends?</h3>

        {newData. map((follower, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.ProfilePic} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.Name+ " " +follower.Sirname}</span>
                            <span>@{follower.Name + follower.Sirname}</span>
                        </div>
                    </div>
                    <button className='button fc-button' onClick={(e)=>{handleFollow(e, follower.Name, follower.Sirname, follower.ProfilePic, )}}>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard