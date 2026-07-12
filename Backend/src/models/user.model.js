const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    author_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    assistantphoto: {
        type:String,
    
    },
    assistantname:{
        type:String,
        
    },
    History:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'history'
    }]

  
     
},

    {
        timestamps:true
    })
    const userModel=mongoose.model("user",userSchema);
    module.exports=userModel;