import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/adminlogin.css';
const AdminLogin = () => {
  let [phone, setPhone] = useState();
  let [password, setPassword] = useState();

  let navigate = useNavigate();
  let login =(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8080/admins/verifyByPhone?phone=${phone}&password=${password}`).then((res)=>{
      localStorage.setItem("admin", JSON.stringify(res.data.data));
      alert("Verified Successfully");
      navigate('/adminhome')
    }).catch(()=>{
      alert("Invalid Phone or password");
    })
  }
  return (
    <div className='format'>
     <div className='adminlogin'>
      <form>
        <h3>Login Here My Dear Admins</h3>
        <input type='tel' pattern='[0-9]{10}' placeholder='Enter Your Phone Number' value={phone} onChange={(e)=>{
          setPhone(e.target.value)
        }}/><br/><br/>
        <input type='password' placeholder='Enter Your password' value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}/> <br/><br/>
        <button onClick={login}>Login</button>
        <p>New Here Click here to <Link to='/adminsignup'>Register as Admin</Link></p>
      </form>
     </div>
    </div>
  )
}

export default AdminLogin