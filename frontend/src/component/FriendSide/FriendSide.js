import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCards';
import FriendCard from '../FriendCard/FriendCard';
import './FriendSide.css'

const FriendSide = () => {
  return (
   <div className="FriendSide">
   <FriendCard/>
   <FollowersCard/>
   </div>
  )
}

export default FriendSide;