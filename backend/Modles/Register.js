const mongoose=require("mongoose")

const Regschema=mongoose.Schema({
    Name:String,
    Sirname: String,
    Email:String,
    Password:String,
    Address:String,
    ProfilePic:String,
})
const Users=mongoose.model("RuserF",Regschema)
module.exports=Users