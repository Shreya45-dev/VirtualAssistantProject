

import React, { useState,useRef } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom"

const Signin = () => {
const navigate=useNavigate()
const form = useRef();
  const [first, setfirst] = useState("")
  const[second,setsecond]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("")
 

 console.log(import.meta.env.VITE_API_URL)

  const submithandler=async(e)=>{
 
   e.preventDefault()
    



   try{
    const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/user/register`,
      {
        author_name:first+" "+second,
        email,
        password
      }
      
      
    ,{
      withCredentials:true,
        
    })
   // console.log(response.data.message)
    alert(response.data.message)
    navigate("/photo")

    
  }
  catch(error){
    console.log(error)
    alert("registration ❌")
   console.log("Status:", error.response.status);
   console.log("Data:", error.response.data);
  }
}

  
  return (
    <>
    
    <div className='flex relative justify-center items-center bg-gradient-to-br from-blue-300 via-blue-600 to-yellow-400 h-screen w-screen'> 
<div className=' h-[600px] w-[340px] md:w-[440px] border-2 rounded-xl bg-blue-200 border-zinc-500 flex items-center justify-center '>
      <div className="h-[600px] md:w-[420px] w-[320px] ">
      <i className='text-4xl font-bold mt-5 mb-5 ml-3 '>Sign Up</i>  
      <h1 className='mb-3 ml-3'>Please fill in this form to create account</h1>
    <form  ref={form} onSubmit={submithandler}  > 
      <h1 className=' font-semibold'>First Name</h1>
      <input type='text' className='bg-slate-200 w-full mt-2 mb-2 'name="first" value={first} onChange={(e)=>setfirst(e.target.value)} />
      <h1 className=' font-semibold'>Second Name</h1>

      <input type='text' className='bg-slate-200 w-full mt-2 mb-2 ' value={second} onChange={(e)=>setsecond(e.target.value)} />
      <h1 className=' font-semibold'>Email</h1>
     <input type="email"  value={email} onChange={(e)=>setemail(e.target.value)}/>

            <h1 className=' font-semibold'>Password</h1>

      <input type='text' className='bg-slate-200 w-full mt-2 mb-2 ' value={password} onChange={(e)=>setpassword(e.target.value)} />
       <h1>If Already Registered ?<Link className="text-green-900 font-semibold" to="/user/login" >Login</Link></h1>
    
     <button type="submit" className='bg-blue-500 h-6 w-full'>Sign Up</button>
      
    
      
    </form>
  </div>
    
  </div>

      
    </div></>
  )}





export default Signin
