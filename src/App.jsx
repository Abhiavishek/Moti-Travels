import React from 'react'
import LandingHomePage from './Components/LandingHomePage'
import Homepage from './Components/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import UserLogin from './Components/UserLogin'
import UserSignUp from './Components/UserSignUp'
import AdminLogin from './Components/AdminLogin'
import AdminSignUp from './Components/AdminSignUp'
import AdminHomePage from './Components/AdminHomePage'
import Error from './Components/Error'
const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<AboutUs/>} />
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/userlogin' element={<UserLogin/>}/>
    <Route path='/landingpage/*' element={<LandingHomePage/>}/>
    <Route path='/usersignup' element={<UserSignUp/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>}/>
    <Route path='/adminsignup' element={<AdminSignUp/>}/>
    <Route path='adminhome/*' element={<AdminHomePage/>}/>
    <Route path='/*' element={<Error/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App