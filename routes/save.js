const express=require("express");
const { SaveModel } = require("../model/saveDataMode");

const saveRouter=express.Router()

saveRouter.post("/add",async(req,res)=>{
    let payload=req.body;
    try{
        let data = await SaveModel.insertMany(payload)
        res.json(data)
    }catch(err){
        res.json(err)
    }
})

saveRouter.get("/get/:page",async(req,res)=>{
    const {page}=req.params;
    const email=req.body.email

    const newPage=(page-1)*2

    try{
        let save=await SaveModel.find({email}).skip(newPage).limit(2)
        res.json(save)

    }catch(err){
        res.json(err)
    }


})
module.exports={saveRouter}
