import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactDetails from './components/ContactDetails';

const Routers = () => {
    return (
        <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/navbar' element={<Navbar/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/contactdetails:name' element={<ContactDetails/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    );
}

export default Routers;
