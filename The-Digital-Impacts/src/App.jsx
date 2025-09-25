import React from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Services from './components/Servi/services';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Portfolio/>
    </>
  )
}

export default App;
