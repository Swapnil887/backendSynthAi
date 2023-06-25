const jwt = require("jsonwebtoken")
const { UserModel } = require("../model/userModel")

const authenticate = async (req,res,next)=>{
    const token = req.headers.authorization
    console.log(token)
    try{
        if(token){
            
        var decoded = jwt.verify(token,"key")
        req.body.email = decoded.email;
        next()
        }
        else{
        res.send("You have to login first")
        }
    }catch{
        console.log(error)
        res.json("error in middleware");
    }
}

module.exports = {authenticate}