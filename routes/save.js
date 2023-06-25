const express=require("express");
const { SaveModel } = require("../model/saveDataMode");

const saveRouter=express.Router()

saveRouter.post("/add",async(req,res)=>{
    let payload=req.body;
    try{
        await SaveModel.insertMany(payload)
        res.send("Your Data Save!")
    }catch(err){
        res.send(err)
    }
})

saveRouter.get("/get/:page",async(req,res)=>{
    const {page}=req.params;
    const email=req.body.email

    const newPage=(page-1)*2

    try{
        let save=await SaveModel.find({email}).skip(newPage).limit(2)
        res.send(save)

    }catch(err){
        res.send(err)
    }


})
module.exports={saveRouter}