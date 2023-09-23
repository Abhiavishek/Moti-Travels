import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import axios from 'axios';
import '../styles/userlogin.css';
import loginImg from '../styles/userlogin.jpg';
const UserLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let login =(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8080/users/verifyByEmail?email=${email}&password=${password}`).then(()=>{
      alert("Verified Successfully");
      navigate('/landingpage')
    }).catch(()=>{
      alert("Invalid Email or password");
    })
  }
  return (
    <div className='format'>
    <div className='userlogin'>
      <form>
        <h3>Login to book tickets</h3>
        <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/><br></br> <br></br>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}/><br></br> <br></br>
        <button id='login' onClick={login}>Login</button><br></br> <br></br>
        <p>New Here? Click here to <Link to='/usersignup'>Register</Link></p><br></br>
        <Link to='/adminlogin'>Admin Login</Link>
        <p><WarningAmberIcon id="warning"/>Only for admins</p>
      </form>
    </div>
     <img src={loginImg} className='loginImg'/>
    </div>
  )
}

export default UserLogin