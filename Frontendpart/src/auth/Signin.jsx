

/*import React, { useState,useRef } from 'react'
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
   console.log(response.data);
alert(JSON.stringify(response.data));
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





export default Signin*/




import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/user/register`,
        {
          author_name: first + " " + second,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      alert(response.data.message || "Registration Successful");

      setFirst("");
      setSecond("");
      setEmail("");
      setPassword("");

      navigate("/photo");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-pink-400 via-purple-300 to-purple-800">

      <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-800 w-96 rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center text-purple-800 mb-2">
          Sign Up
        </h1>

        <p className="text-center text-black mb-6">
          Create your account
        </p>

        <form onSubmit={submitHandler}>

          <label className="font-semibold text-gray-700">
            First Name
          </label>

          <input
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className="w-full border p-2 rounded mt-2 mb-4 focus:outline-none focus:border-purple-500"
            required
          />

          <label className="font-semibold text-gray-700">
            Last Name
          </label>

          <input
            type="text"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            className="w-full border p-2 rounded mt-2 mb-4 focus:outline-none focus:border-purple-500"
            required
          />

          <label className="font-semibold text-gray-700">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded mt-2 mb-4 focus:outline-none focus:border-purple-500"
            required
          />

          <label className="font-semibold text-gray-700">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded mt-2 mb-6 focus:outline-none focus:border-purple-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 rounded hover:opacity-90"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-black">
          Already have an account?{" "}
          <Link
            to="/user/login"
            className="text-black font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Signin;