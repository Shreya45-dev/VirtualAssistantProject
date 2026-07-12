const mongoose=require('mongoose')


function connectDB(){
    mongoose.connect("mongodb://localhost:27017/chatai")
    .then(()=>{
        console.log("Mongodb connected")
    })
    .catch((err)=>{
        console.log("Mongodb connection error",err)

    })

}
module.exports=connectDB