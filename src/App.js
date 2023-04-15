
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Info from './components/info/info';
import Slider from './components/slider/slider';
import Home from './components/Home/home';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Yoga_project from './components/projects/yoga_project';
import Interior_project from './components/projects/interior_project';
import Twilight_project from './components/projects/twilight_project';
import Header from './components/header/header';
import Header3 from './components/header/Header3';
import "swiper/css/bundle";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header3 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/yoga-project' element={<Yoga_project />} />
        <Route path='/interior-project' element={<Interior_project />} />
        <Route path='/twilight-project' element={<Twilight_project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
