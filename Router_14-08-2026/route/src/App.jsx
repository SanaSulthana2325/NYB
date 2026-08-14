import{BrowserRouter, Routes, Route, useNavigate,useParams} from "react-router-dom"
import { useState } from "react";


import React from 'react'
import Route_Page from "./Pages_14-08-2026/Route_Page"
import About from "./Components_14-08-2026/Example_14-08-2026/About"
import Home from "./Components_14-08-2026/Example_14-08-2026/Home"
import Contact from "./Components_14-08-2026/Example_14-08-2026/Contact"
import Navbar from "./Pages_14-08-2026/Navbar"
import Page_Not_Found_404 from "./Components_14-08-2026/Page_Not_Found_404"
import Dashboard from "./Components_14-08-2026/Nested_Routes_14-08-2026/Dashboard"
import Profile from "./Components_14-08-2026/Nested_Routes_14-08-2026/Profile"
import Setting from "./Components_14-08-2026/Nested_Routes_14-08-2026/Setting"
import Home1 from "./Components_14-08-2026/useNavigate_14-08-2026/Home1"
import About1 from "./Components_14-08-2026/useNavigate_14-08-2026/About1"
import Product from "./Components_14-08-2026/Dynamic_Routes_14-08-2026/product"
import User from "./Components_14-08-2026/Dynamic_Routes_14-08-2026/User"
import Login from "./Components_14-08-2026/Protected_Route_14-08-2026/Example1.jsx/Login"
import ProtectedRoute from "./Components_14-08-2026/Protected_Route_14-08-2026/Example1.jsx/ProtectedRoute"
import Dashboard1 from "./Components_14-08-2026/Protected_Route_14-08-2026/Example1.jsx/Dashboard1"
import Example2 from "./Components_14-08-2026/Dynamic_Routes_14-08-2026/Example2"
//import Mini_Page from "./Pages_14-08-2026/Mini_Page"
// Mini Practice
import Navbar1 from "./Components_14-08-2026/Mini_Practice_14-08-2026/Navbar1";
import ProtectedRoute1 from "./Components_14-08-2026/Mini_Practice_14-08-2026/ProtectedRoute1";

import Home2 from "./Components_14-08-2026/Mini_Practice_14-08-2026/Home2";
import Students from "./Components_14-08-2026/Mini_Practice_14-08-2026/Students";
import StudentProfile from "./Components_14-08-2026/Mini_Practice_14-08-2026/StudentProfile";
import Courses from "./Components_14-08-2026/Mini_Practice_14-08-2026/Courses";
import Login1 from "./Components_14-08-2026/Mini_Practice_14-08-2026/Login1";
import Dashboard2 from "./Components_14-08-2026/Mini_Practice_14-08-2026/Dashboard2";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    
    <BrowserRouter>
    <div style={{ padding: "20px" }}>
          <Navbar1 /> </div>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Route_Page/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Page_Not_Found_404/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="setting" element={<Setting/>}/>
      <Route path="/home1" element={<Home1/>}/>
      <Route path="/about1" element={<About1/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/user/:username" element={<User/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path = "/dashboard" element={<ProtectedRoute>
        <Dashboard1/>
      </ProtectedRoute>}/>
      <Route path="/Example2/:day" element={<Example2/>}/>

      {/* Mini Practice */}
      {/* <Route path="/mini" element={<Mini_Page/>}/> */}

      <Route path="/" element={<Home2 />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/:id" element={<StudentProfile />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/Home2" element={<Home2 />} />

      
              <Route
                path="/login1"
                element={<Login1 setIsLoggedIn={setIsLoggedIn} />}
              />
      
              <Route element={<ProtectedRoute1 isLoggedIn={isLoggedIn} />}>
                <Route path="/dashboard2" element={<Dashboard2 />} /></Route>
              




      












      

    </Routes>
    </BrowserRouter>
  )
}

export default App