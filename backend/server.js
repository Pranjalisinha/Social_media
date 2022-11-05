const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
require("dotenv").config();
const registercontroller = require("./Routes/RegisterRoute")
const friendcontroller = require("./Routes/Friends")

app.use(cors());
app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({extended: false}));

app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log("Server connected succesfully at 3001")
    }
    else{
        console.log(err)
    }
});
//"mongodb+srv://test1:test12@test1.bewchyb.mongodb.net/instaclone?retryWrites=true&w=majority"
const URL= "mongodb+srv://test1:test12@test1.bewchyb.mongodb.net/friendsbook?retryWrites=true&w=majority"
mongoose.connect(URL, (data)=>{
    console.log("Successfully connect to db")
},(err)=>{
    console.log(err)
});


app.use("/userRegister",registercontroller);
app.use("/friends",friendcontroller);

app.get("/",(req,res)=>{
    res.status(200).send("FriendsBook")
},(err)=>{
    console.log(err)
})

