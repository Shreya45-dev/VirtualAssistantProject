/*



import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'


const Home = () => {

  const [command, setcommand] = useState("")
   const [aitext, setaitext] = useState("")
   const[type,settype]=useState('')
   const [listening,setListening]=useState(false)
   const isSpeakingRef=useRef(false)
   const recognitionRef=useRef(null)
   const synth=window.speechSynthesis
   const startRecognition=()=>{
    try{
      recognitionRef.current?.start()
      setListening(true);
    }
    catch(error){
      if(!error.message.includes("start")){
        console.error("Reognition error".error)
      }
    }
    }
   
   const speak=(text)=>{
    const utterence=new SpeechSynthesisUtterance(text)
    isSpeakingRef.current=true
    utterence.onend=()=>{
      isSpeakingRef.current=false
  startRecognition()
    }

    
    synth.speak(utterence)

   }
   const handleCommand=(data)=>{
    console.log(command)
    speak(data.response)
    const win = window.open(
  `https://www.google.com/search?q=${encodeURIComponent(data.userInput)}`,
  "_blank"
);
console.log(win)
    if(data.type==='google_search'){
      const query=encodeURIComponent(data.userInput)
    window.open(`https://www.google.com/search?q=${query}`,
        '_blank')
    }
    if(data.type==='calculator_open'){
      window.open(`https://www.google.com/search?q=calculator`,
        '_blank'
      )
    }
    if(data.type==='instagram-open'){
      window.open(`https://www.instagram.com/`,'_blank')
    }
    if(data.type==='facebook-open'){
      window.open(`https://www.facebook.com/`,`_blank`)
    }
    if(data.type==='weather-show'){
      window.open(`https://www.google.com/search?q=weather`,`_blank`)
    }
    if(data.type==='youtube-search' || type==='youtube-play'){
      const query=encodeURIComponent(data.userInput)
      console.log(data.userInput);
     window.location.href =`https://www.youtube.com/results?search_query=${query}`
    }

    }
   
   useEffect(() => {
     const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
     console.log(window.SpeechRecognition);
console.log(window.webkitSpeechRecognition);
     const recognition=new SpeechRecognition()
     recognition.continuous=true;
     recognition.lang='en-US'

       recognitionRef.current=recognition
       const isRecognizingRef={current:false}
     
         const safeRecognition=()=>{
          if(!isSpeakingRef.current && !isRecognizingRef.current){
            try{
            recognition.start();
            console.log("recognition requested to start")
          }
          catch(err){
            if(err.name!=="InvalidStateError"){
              console.error("start error",err)
            }
          }
         }}
         recognition.onstart=()=>{
          console.log("recognition started");
            isRecognizingRef.current=true;
            setListening(true)
         }
         recognition.onend=()=>{
          console.log("Recognition ended")
          isRecognizingRef.current=false;
          setListening(false)
          if(!isSpeakingRef.current){
            setTimeout(()=>{
              safeRecognition()
            },1000)
          }
         }

         if(!isSpeakingRef.current){
          setTimeout(()=>{
            safeRecognition()
          },1000)//delay avid rapid loop
          
         }

         recognition.onerror=(event)=>{
          console.warn("Recognition error:",event.error)
          isRecognizingRef.current=false
          setListening(false)
          if(event.error!=='abroad' && !isSpeakingRef.current){
            setTimeout(()=>{
              safeRecognition();
            },1000)
          
            }
          }
         












console.log(window.SpeechRecognition);
console.log(window.webkitSpeechRecognition);
     recognition.onresult=async(e)=>{
      const transcript=e.results[e.results.length-1][0].transcript.trim()
      console.log("heard"+ transcript)
      if(transcript.toLowerCase().includes("shizuka"))
      {
    recognition.stop()
      isRecognizingRef.current=false
        setListening(false)
       const data= await hello(transcript)
        console.log(data.response)
        handleCommand(data)
        
      }


     }
   
    const fallback=setInterval(()=>{
      if(!isSpeakingRef.current && !isRecognizingRef.current){
        safeRecognition()
      }
    },10000)
    safeRecognition()
    return()=>{
      recognition.stop()
      setListening(false)
      isRecognizingRef.current=false
      clearInterval(fallback)
    }
   }, [])
   
  const hello=async(text)=>{
    console.log(text)
   try{
    const res=await axios.post("http://localhost:3000/api/auth/user/ask",
      {command:text},
      {withCredentials:true}
    )
    settype(res.data.type)
    
    console.log(res.data);
    return res.data;
    //setaitext(res.data.response)
  }
  catch(error){
          console.log(error)
                console.error("Error sending message:", error);
         console.log("Status:", error.response.status);
    console.log("Data:", error.response.data);
  }}
  
  return (
    <div>
    
   
      
      
    </div>
  )
}

export default Home




*/


import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const Home = () => {
 const [command, setcommand] = useState([])
 const [result,setresult]=useState("")
 const[ask,setask]=useState("")
 const user=useSelector((state)=>state.auth.user)
  /*const [listening, setListening] = useState(false)

  const isSpeakingRef = useRef(false)
  const recognitionRef = useRef(null)
  const isRecognizingRef = useRef(false)

  const synth = window.speechSynthesis

  const startRecognition = () => {
    const recognition = recognitionRef.current
    if (!recognition) return

    try {
      recognition.start()
    } catch (e) {}
  }

 const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text)

    isSpeakingRef.current = true

    utterance.onend = () => {
      isSpeakingRef.current = false
      startRecognition()
    }

    synth.speak(utterance)
  }




  const handleCommand = (data) => {
    speak(data.response)

    const query = encodeURIComponent(data.userInput || "")

    if (data.type === 'google_search') {
        window.location.href =
      `https://www.google.com/search?q=${query}`
    }

    if (data.type === 'calculator_open') {
        window.location.href =
      `https://www.google.com/search?q=calculator`
    }

    if (data.type === 'instagram-open') {
        window.location.href =
      `https://www.instagram.com/`
    }

    if (data.type === 'facebook-open') {
        window.location.href =
      `https://www.facebook.com/`
    }

    if (data.type === 'weather-show') {
        window.location.href =
    `https://www.google.com/search?q=weather`
    }

    if (data.type === 'youtube-search' || data.type === 'youtube-play') {
      window.location.href =
        `https://www.youtube.com/results?search_query=${query}`
    }
  }

  useEffect(() => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()

    recognition.continuous = true
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognitionRef.current = recognition

    recognition.onstart = () => {
      isRecognizingRef.current = true
      setListening(true)
      console.log("started")
    }

    recognition.onend = () => {
      isRecognizingRef.current = false
      setListening(false)
      console.log("ended")

      // restart safely
      if (!isSpeakingRef.current) {
        setTimeout(() => {
          startRecognition()
        }, 1500)
      }
    }

    recognition.onerror = (event) => {
      console.warn("error:", event.error)

      isRecognizingRef.current = false
      setListening(false)

      if (event.error === "no-speech") {
        setTimeout(() => startRecognition(), 1500)
      }
    }

    recognition.onresult = async (e) => {

      const result = e.results[e.results.length - 1]

      if (!result.isFinal) return

      const transcript = result[0].transcript.trim()

      console.log("heard:", transcript)

      //if (transcript.toLowerCase().includes(user.assistantname)) {
          console.log(user.assistname)
        recognition.stop()
        isRecognizingRef.current = false
        setListening(false)

        const data = await hello(transcript)

        if (data) handleCommand(data)
    //  }
    }

    // START ONLY ONCE
    setTimeout(() => {
      startRecognition()
    }, 1000)

    return () => {
      recognition.stop()
    }

  }, [])

*/

const isSpeakingRef = useRef(false);
const recognitionRef = useRef(null);
const isRecognizingRef = useRef(false);

const [listening, setListening] = useState(false);

const synth = window.speechSynthesis;

const[menu,setmenu]=useState(false)
// Start Listening
const startRecognition = () => {

  const recognition = recognitionRef.current;

  if (
    !recognition ||
    isRecognizingRef.current ||
    isSpeakingRef.current
  ) {
    return;
  }


  try {

    recognition.start();

  } catch (error) {

    console.log(error);

  }

};



// Stop Listening
const stopRecognition = () => {

  const recognition = recognitionRef.current;


  if (recognition) {

    recognition.stop();

  }


  isRecognizingRef.current = false;

};
const handleCommand = (data) => {
    speak(data.response)

    const query = encodeURIComponent(data.userInput || "")

    if (data.type === 'google_search') {
        window.location.href =
      `https://www.google.com/search?q=${query}`
    }

    if (data.type === 'calculator_open') {
        window.location.href =
      `https://www.google.com/search?q=calculator`
    }

    if (data.type === 'instagram-open') {
        window.location.href =
      `https://www.instagram.com/`
    }

    if (data.type === 'facebook-open') {
        window.location.href =
      `https://www.facebook.com/`
    }

    if (data.type === 'weather-show') {
        window.location.href =
    `https://www.google.com/search?q=weather`
    }

    if (data.type === 'youtube-search' || data.type === 'youtube-play') {
      window.location.href =
        `https://www.youtube.com/results?search_query=${query}`
    }
  }

useEffect(() => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()

    recognition.continuous = true
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognitionRef.current = recognition

    recognition.onstart = () => {
      isRecognizingRef.current = true
      setListening(true)
      console.log("started")
    }

    recognition.onend = () => {
      isRecognizingRef.current = false
      setListening(false)
      console.log("ended")

      // restart safely
      if (!isSpeakingRef.current) {
        setTimeout(() => {
          startRecognition()
        }, 1500)
      }
    }

    recognition.onerror = (event) => {
      console.warn("error:", event.error)

      isRecognizingRef.current = false
      setListening(false)

      if (event.error === "no-speech") {
        setTimeout(() => startRecognition(), 1500)
      }
    }

    recognition.onresult = async (e) => {

      const result = e.results[e.results.length - 1]

      if (!result.isFinal) return

      const transcript = result[0].transcript.trim()

      console.log("heard:", transcript)

      //if (transcript.toLowerCase().includes(user.assistantname)) {
          console.log(user.assistname)
        recognition.stop()
        isRecognizingRef.current = false
        setListening(false)

        const data = await hello(transcript)

        if (data) handleCommand(data)
    //  }
    }

    // START ONLY ONCE
    setTimeout(() => {
      startRecognition()
    }, 1000)

    return () => {
      recognition.stop()
    }

  }, [])

const openbox=<div className="h-56 w-40 absolute z-5 flex flex-col items-center justify-center bg-purple-300  ">
  <h1 onClick={()=>setmenu(false)}>X</h1>
  <Link to="/assistantname" className="hover:text-purple-800 hover:border-b-2">Choose Assistant name</Link>
  <Link to="/photo" className="hover:text-purple-800 hover:border-b-2">Choose Assistant photo</Link>
</div>
// Assistant Voice
const speak = (text) => {


  // stop mic before speaking
  stopRecognition();


  // clear old speech
  synth.cancel();



  const utterance =
    new SpeechSynthesisUtterance(text);



  utterance.lang = "en-US";

  utterance.rate = 1;

  utterance.pitch = 1;



  isSpeakingRef.current = true;



  utterance.onstart = () => {

    console.log("Assistant speaking");

  };



  utterance.onend = () => {


    console.log("Assistant finished");


    isSpeakingRef.current = false;



    // wait for echo to disappear

    setTimeout(() => {

      startRecognition();

    },1000);


  };



  synth.speak(utterance);

};

 
  

  const hello = async (text) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/user/ask`,
        { command: text },
        { withCredentials: true }
      )






     const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
       setcommand((prev) => [
    ...prev,
    {
      id: Date.now(),
      role: "user",
      text: res.data.userInput,
      time: currentTime,
      type: "text",
    },
    {
      id: Date.now() + 1,
      role: "assistant",
      text: res.data.response,
      time: currentTime,
      type: res.data.type,
    },
  ]);
  

      setresult(res.data.response)
      setask("")
      return res.data

    } catch (error) {
      console.log("API error:", error?.response?.data)
    }
  }
     const scroll=useRef();
   useEffect(() => {
  scroll.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [command]);

  useEffect(() => {
    
    const getResult=async()=>{
      console.log(result)
      if(result!==""){
      try{
    const res=await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/assistantMessage`,
      {result},
      {withCredentials:true}
    )
    console.log(res.data.assistantdata)
    
   setMessage(prev => [...prev, res.data.assistantdata]);
  

  }
  catch(err){
    console.log(err.response.data)
    console.log(err.response.status)
  }
}
    }
getResult()
    
  }, [result])
  
 const [message, setMessage] = useState([])
 

 
 const openmenu=()=>{
   setmenu(true)
 }
   

  
 
   

  return (
    <> 
    <div className="sm:h-[50vh] [40vh] w-screen flex flex-col bg-black items-center justify-center">
      '
      <h1 className="text-purple-800 text-4xl hidden sm:block font-semibold m-4 ">Hi I am  {user?.assistantname} </h1>
      <Link to="/photo" className="top-3 ml-[80vw] hidden sm:block px-3 py-1 bg-white rounded-xl text-purple-800">Choose Assistant's Photo</Link>
            <Link to="/assistantname" className="top-3 ml-[80vw] hidden sm:block px-3 py-1 mt-4 bg-white rounded-xl text-purple-800">Choose Assistant's name</Link>
            <Link to="/history" className="absolute z-2 left-4  top-5 text-black px-2 py-1 bg-gray-400 rounded-xl">history</Link>
            <h1 onClick={()=>setmenu(true)}className="top-3 ml-[80vw] block sm:hidden px-3 py-1 mt-4 bg-white rounded-xl bg-blue-500">menu</h1>
                        {menu ? openbox:""}
            
    <img className="h-56 w-64  sm:h-60 sm:w-72 rounded-[50%] "src={user?.assistantphoto}/>
    
    </div>

    <div className="sm:h-[40vh] h-[50vh] w-screen bg-black overflow-y-auto ">
    { command.map((msg) => (
  <div
    key={command.id}
    className={`mb-3 flex ${
      msg.role === "user" ? "justify-end" : "justify-start"
    }`}
  >
    <div
      className={`max-w-xs rounded-xl px-4 py-2 ${
        msg.role === "user"
          ? "bg-purple-800 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      <p className="">{msg.text}</p>

      <p className="mt-1 text-right text-xs opacity-70">
        {msg.time}
      </p>
    </div>
    <div ref={scroll}></div>
  </div>   
))}
</div>     
<div className='h-[10vh] w-screen flex items-center bg-black justify-center'>
       <input type="text"  placeholder='enter' className="h-10  sm:w-[50vw] w-[80vw] border-2 rounded-xl bg-white text-black" value={ask} onChange={(e)=>setask(e.target.value)}/>
    <button className="text-purple-800 ml-2" onClick={()=>hello(ask)} >search</button></div>
  
    
    </>
  )}
   
  
export default Home









