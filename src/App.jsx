// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import ProjectDisplay from "./pages/ProjectDisplay";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  

  return (
    <div className='App'>
      <Router>
        <Navbar/>

        {/* The different Pages that are rendered when i click the links in the navbar */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDisplay/>}/>
          <Route path="/experience" element={<Experience />} />
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App
