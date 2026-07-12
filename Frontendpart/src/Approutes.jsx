import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Login from './auth/Login'
import Signin from './auth/Signin'
import Assistantphoto from './auth/Assistantphoto'
import History from './auth/History'
import AssistantName from './auth/AssistantName'
const Approutes = () => {
    
  return (
     
    <div>
        <Router>
            <Routes>
              <Route path="/user/register" element={<Signin/>}/>
                 <Route path="/user/login" element={<Login/>}/>
                 <Route path="/home" element={<Home/>}/>
                 <Route path="/photo" element={<Assistantphoto/>}/>
                 <Route path="/history" element={<History/>}/>
                 <Route path="/assistantname" element={<AssistantName/>}/>
            </Routes>
        </Router>
      
    </div>
  )
}

export default Approutes
