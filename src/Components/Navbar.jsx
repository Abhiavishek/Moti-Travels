import React from 'react'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='logo'>
       <h2><DirectionsBusIcon id="img"/>Balaji <span>Travels</span></h2>
      </div>

      <div className='options'>
       <Link to="/about"> <InfoIcon id="about"/> AboutUs</Link>
       <Link to="/contact"> <ContactSupportIcon id="contact"/> ContactUs</Link>
       <Link to="/userlogin"> <LoginIcon id="login"/> Login</Link>
      </div>
      
    </div>
  )
}

export default Navbar