const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()
const jwt = require("jsonwebtoken")


const Users = require("../Modles/Register")

const salt = 10

router.post("/Register", async (req, res) => {
    // checking email is unique or not
    console.log("User Added")
    const Email = await Users.find({ Email: req.body.Email })
    if (Email.length) {
        console.log("User Exist")
        res.status(400).send("EmailExist")
    } else {
                // generating salt        
                bcrypt.genSalt(salt, (salterr, saltval) => {
                    if (!salterr) {
                        // generating hashvalue
                        bcrypt.hash(req.body.Password, saltval, (hasherr, hasval) => {
                            if (!hasherr) {
                                // creating user
                                Users.create({
                                    ProfilePic: req.body.ProfilePic,
                                    Name: req.body.Name,
                                    Sirname: req.body.Sirname,
                                    Email: req.body.Email,
                                    Password: hasval,
                                    Address: req.body.Address,
                                })
                                console.log("User Added Successfully")
                                res.status(200).send('successfully created')
                            }
                            else {
                                res.status(400).send("hasherr")
                            }
                        })
                    } else {
                        res.status(400).send("salterr")
                    }
                }) // saltclosing 
            }
   
    })// registerclosing


//Signin

router.post("/Signin", async (req, res) => {

    const signindata = await Users.find({ Email: req.body.Email })
    // console.log(signindata)
    if (signindata.length) {
        const data = await bcrypt.compare(req.body.Password, signindata[0].Password)
        if (data) {
            //generating token
            const Authtoken = jwt.sign(signindata[0].Email, process.env.SECRET_KEY)
            const username = signindata[0].Name
            const profileImg = signindata[0].ProfilePic
            res.status(200).send({ Authtoken: Authtoken, username: username, ProfilePic: profileImg })
        }
        else {
            res.status(400).send("Invalid password")
        }
    }
    else {
        res.status(400).send(`Invalid User`)
    }
})
//Update Image router
router.put("/updateimage", (req, res) => {
    Users.find({ Email: req.body.Email }).then((user) => {
        if (user.length) {
            Users.updateOne({ Name: req.body.Name }, { ProfilePic: req.body.ProfilePic }).then(() => {
                res.status(200).send("Profile Photo updated Successfully")
            }).catch((err) => {
                res.status(400).send(err)
            })

        } else {
            res.status(400).send("Invalid User")
        }
    })
});

router.get("/User", (req, res) => {
    try {
        const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        Users.find({ Email: user }).then((data) => {
            // console.log(data)
            res.status(200).send({ user: data });
        }).catch((err) => {
            res.status(400).send(err);
        })
    } catch (err) {
        res.status(400).send("Unauthorize user", err)
    }

})
router.get("/allUser", (req, res) =>{
    Users.find().then((data) =>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(200).send(err);
    })
})
module.exports = router;