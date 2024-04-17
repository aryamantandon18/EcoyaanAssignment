import React from 'react'
import './App.css'
import { BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import SellOnEcoyaan from './components/pages/SellOnEcoyaan'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sell' element={<SellOnEcoyaan/>}/>
      </Routes>
      <Toaster/>
      <Footer/>
      </Router>
    </>
  )
}

export default App
