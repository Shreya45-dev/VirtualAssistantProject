const mongoose=require('mongoose')
const historySchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    command:{
        type:String,
        required:true
    },
     role: {
      type: String,
      enum: ["user", "assistant"],
      
    },
  
     
},

    {
        timestamps:true
    })
    const historyModel=mongoose.model("history",historySchema);
    module.exports=historyModel;