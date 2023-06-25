const mongoose = require("mongoose");


const saveSchema = new mongoose.Schema({
    type: {
      type: String
    },
    post: {
      type: String
    },
    email:{
        type:String
    }
  });
  
  const SaveModel = mongoose.model("save",saveSchema)

  module.exports = {SaveModel}