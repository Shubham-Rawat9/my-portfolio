import React from "react";
import { Route ,Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Project from "../pages/Project";
import Contact from "../pages/Contact";


const AppRoutes =() =>{
    return(
        <Routes>
            <Route path ='/' element={<Home/>} /> 
             <Route path ='/about' element={<About/>}/> 
             <Route path ='/service' element={<Service/>}/> 
             <Route path = '/project' element={<Project/>}/>
             <Route path='/Contact' element={<Contact/>}/>   
        </Routes>
    )
}

export default AppRoutes;