import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function App() {
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="*" element={<NotFound/>} />       
      </Routes>
      <Footer/>
    </Router>
    
   
  );
}

export default App;
