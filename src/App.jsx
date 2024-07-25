import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Signup from './Component/Signup'
import Signin from "./Component/Signin";
import Navbar from "./Component/Navbar";
import Additem from "./Component/Additem";
import Cart from "./Component/Cart";
import Team from "./Component/Team";

function App() {


  return (
    <>
 <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/additem" element={<Additem/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ourteam" element={<Team />} />
          {/* <Route path="/card" element={<Card />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/slidebar" element={<Slidebar />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
