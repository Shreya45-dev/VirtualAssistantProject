/*import axios from 'axios'
import React, { useState } from 'react'

const Assistantphoto = () => {
    
     const images=[
       {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2k89kexN2ddGtOJ5Wno8pjHmIRCnjKetdChK7qtVq-w&s=10"},
        {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOYIOmoZayoG9t5ql9qWJcfur8Je8-3zFTB1bZUNOTQ&s=10"},
        {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JMzaZH1URn_4ENRLSGgbdK8Rx2eMEdL8aeZoAbaYvA&s=10"},
        {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4uembdSvh0wX8eCK192CJgIosNYOz0iv6it1jj_OEm9K3v7JIshMwzy0&s=10"},
        {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1Np_2iV_UN5fQbo7IEqLerfUO1yob1B-5tTKWHdLlQ&s=10"},
        {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYoblPgAnhGcsE3znJrMaBA-TeW6ORUEi5iKMUlG9ug&s=10"},
        {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXyYOdJxNrNg3nijKxFfrhOt99MLQUA7ZipfEp9XzNg&s=10"}
     ]
           const [assistantphoto, setassistantphoto] = useState()
    const add=async()=>{
  
        const res=await axios.post('http://localhost:3000/api/auth/user/addphoto',{
                           assistantphoto},
                           { withCredentials:true}
        )
        console.log("hello")
    }
  return (
    <div>
        {images.map((img)=>{
            return  (

            <>
            <img src={img.img}/>

            </>)
        })}
      
    </div>
  )
}

export default Assistantphoto*/


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Assistantphoto = () => {
    
  const images = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2k89kexN2ddGtOJ5Wno8pjHmIRCnjKetdChK7qtVq-w&s=10",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOYIOmoZayoG9t5ql9qWJcfur8Je8-3zFTB1bZUNOTQ&s=10",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JMzaZH1URn_4ENRLSGgbdK8Rx2eMEdL8aeZoAbaYvA&s=10",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4uembdSvh0wX8eCK192CJgIosNYOz0iv6it1jj_OEm9K3v7JIshMwzy0&s=10",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1Np_2iV_UN5fQbo7IEqLerfUO1yob1B-5tTKWHdLlQ&s=10",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYoblPgAnhGcsE3znJrMaBA-TeW6ORUEi5iKMUlG9ug&s=10",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXyYOdJxNrNg3nijKxFfrhOt99MLQUA7ZipfEp9XzNg&s=10",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENUlTY8g-gi9a-W8ujPaB8Uuqd-JuGJUZSqLW8dkTFw&s=10"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWLACBypu3rYSh6DcScDvKd-8ELKb0Cx2NtksiybJUQ&s=10"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGPvQccx3R5B0UQ1sPbLMS_KrtP6Vxwv1cBOREmxsFg&s=10"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHH9oUopTRsQ875SVM_ORICsFbrJxE8mSnnDI7NOyXkw&s=10"
    },


    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv_vSC_K7y9ywYgrYvNtSKMboWRMlaY6TMq09sx2LbA&s=10"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-g2gu8eCCVITcJDijnh1hDHxDeQ31rUIuL8wcOBNo2A&s=10"
    }
  ];

  const [assistantphoto, setassistantphoto] = useState("");
   const navigate=useNavigate()
  const add = async () => {
  if(assistantphoto==="") {
         alert("select photo")
       
         return ;
  }
  
  
  
  try{
    const res = await axios.post(
      
      `${import.meta.env.VITE_API_URL}/api/auth/user/addphoto`,
      { assistantphoto },
      { withCredentials: true }
    );
    console.log(res);
    console.log("hello");
     // navigate("/photo")
     setassistantphoto("")
    navigate("/assistantname")}

    catch(err){
        alert("select assistant")
     // navigate("/photo")
    }

  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">
        Choose Assistant Photo
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.img}
            alt="assistant"
            onClick={() => setassistantphoto(img.img)}
            className={`w-48 h-56 object-cover rounded-xl cursor-pointer border-4 transition-all duration-300 hover:scale-105 ${
              assistantphoto === img.img
                ? "border-blue-500 shadow-lg"
                : "border-transparent"
            }`}
          />
        ))}
      </div>

      <button
        onClick={add}
        className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Save Photo
      </button>
    </div>
  );
};

export default Assistantphoto;
