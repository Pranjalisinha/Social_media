const mongoose=require("mongoose")

const FriendsSchema=mongoose.Schema({
   Name:String,
   ProfilePic:String,
})
const friends=mongoose.model("Friends",FriendsSchema)
module.exports=friends