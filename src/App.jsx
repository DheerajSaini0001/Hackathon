import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Signup from './Component/Signup'
import Signin from "./Component/Signin";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/Bookingupdate/:id" element={<BookingUpdate />} />
          <Route path="/Bookingdata" element={<BookingData />} />
          <Route path="/card" element={<Card />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/slidebar" element={<Slidebar />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
