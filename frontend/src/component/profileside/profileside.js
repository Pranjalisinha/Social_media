import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../Profilecard/ProfileCard";
import "./profileside.css"

const ProfileSide = () =>{
    return(
        <div className="profileSide">
            <LogoSearch/>
            <ProfileCard/>
        </div>
    )
}
export default ProfileSide;