const userModel=require('../models/user.model')
const historyModel=require('../models/history.model')
const geminiResponse=require('../../gemini')
const moment=require('moment')
const askToAssistant=async(req,res)=>{
try{
    const {command}=req.body
    const hi=await historyModel.create({
        userId:req.user._id,
        command,
        role:"user"

    })
    const user=await userModel.findById(req.user._id);
    console.log(user)
    console.log(command)
    user.History.push(hi._id)
    await user.save()
  const userName=user.author_name
 // const assisstantImage=user.assistantImage
  const assistantName=user.assistantname
  const result=await geminiResponse(command, userName, assistantName)//assistantImage
  console.log("result",result)
  const jsonMatch=result.match(/\{.*\}/s)
  console.log("jsonMatch",jsonMatch)
  if(jsonMatch){
    const jsonString=jsonMatch[0]
    const gemResult=JSON.parse(jsonString)
    const type=gemResult.type
    
    switch(type){
        case 'get-date':
            return res.json({
                type,
                userInput: gemResult.userInput,
                response:`current date is ${moment().format("YYYY-MM-DD")}`
                

                
            })
            case 'get-time':
                return res.json({
                    type,
                    userInput:gemResult.userInput,
                    response:`current time is ${moment().format("HH:mm:ss")}`
                    
                })
            case 'get-day':
                return res.json({
                    type,
                    userInput:gemResult.userInput,
                    response:`current day is ${moment().format("dddd")}`
                })
               case 'get-month':
                return res.json({
                    type,
                    userInput:gemResult.userInput,
                    response:`current month is ${moment().format("MMMM")}`
                })
                case 'general':
    return res.status(200).json({
        type,
        userInput: gemResult.userInput,
        response: gemResult.response,
    });
                case 'google-search':
                case 'youtube-search':
                case 'youtube-play':
                case 'calculator-open':
                case 'instagram-open':
                case 'facebook-open':
                case 'weather-show':


                 

   













                

                return res.status(200).json({
                    type,
                    userInput:gemResult.userInput,
                    response:gemResult.response,
                    message:"message created successfully"
                })
             
                
                default:
                    return res.status(400).json({
                        response:"I did not understand that command"
                    })
                    
    }
  }
  else{
    res.status(500).json({message:"sorry,I cannot understand your request"})
  }



}
catch(error){
    console.log(error)
      console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    res.status(500).json({message: "Error occurred while fetching user details"})
}
}


const allMessages=async(req,res)=>{
    
    const user=await userModel.findById(req.user._id).populate('History')
    return res.status(202).json({
        message:"fetched successfully messages",
        messages:user.History

        
    })
    

}
const assistantMessage=async(req,res)=>{
    const {result}=req.body;
    const assistantdata=await historyModel.create({
        userId:req.user._id,
        command:result,
        role:"assistant"

    }
)






const user=await userModel.findById(req.user._id)
user.History.push(assistantdata._id)
await user.save()
  return res.status(200).json({
        message:"send successfully results",
         assistantdata

        
    })

}





module.exports={askToAssistant,allMessages,assistantMessage}