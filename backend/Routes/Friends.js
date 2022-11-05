const express=require("express")

const router=express.Router()
const jwt=require("jsonwebtoken")

const friends = require("../Modles/Friends")
const User = require("../Modles/Register");

router.get("/myfriend", (req, res)=> {
    try {
        const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY );
        friends.find().then((data) =>{
            res.status(200).send(data);
        }).catch((err)=>{
            res.status(400).send(err)
        })
    } catch(err) {
        res.status(403).send("User Not Authorized", err)
    }
    
    
});
router.post("/add", (req, res)=> {
    ///{username: "", order_id: "", order_type: "prepaid/postpaid", item_id: "", order_status: ""}
    try {
        const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY );
        User.find({Email: user}).then((data)=>{
            
            if (data.length) {
                friends.find({Name:req.body.Name}).then((data)=>{
                    if(!data.length){
                        friends.create({ 
                            Name: req.body.Name,
                            ProfilePic: req.body.ProfilePic
                         }).then(()=>{
                            res.status(200).send("Friend added successfully")
                                
                        }).catch((err)=>{
                            res.status(400).send(err)
                        })
                    } else {
                        res.status(401).send("Already Friend")
                    }
                })
               
            }
            // console.log(data)
        }).catch ((err)=>{
            console.log(err)
        })
    } catch(err) {
        res.status(400).send("Unauthorize user", err)
    }  
});

module.exports= router;