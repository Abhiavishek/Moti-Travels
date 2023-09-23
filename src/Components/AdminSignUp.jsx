import axios from 'axios';
import React, { useState } from 'react'

const AdminSignUp = () => {
  let [name, setName] = useState();
  let [phone, setPhone] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [gst, setGst] = useState();
  let data = {name, phone, email, password, gst}
  let HandleSubmit = (e)=>{
   e.preventDefault();
   axios.post(`http://localhost:8080/admins`, data).then(()=>{
    alert("Successfully Registered");
   }).catch(()=>{
    alert("Something Went Wrong");
   })
  }
  return (
    <div>
      <form action="">
        <input type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>{
          setName(e.target.value);
        }}/><br/><br/>
        <input type='tel' placeholder='Enter Your Phone Number' value={phone} onChange={(e)=>{
          setPhone(e.target.value);
        }}/><br/><br/>
        <input type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }}/><br/><br/>
        <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}/><br/><br/>
        <input type='text' placeholder='Enter Your Gst' value={gst} onChange={(e)=>{
          setGst(e.target.value)
        }}/><br/><br/>
        <button onClick={HandleSubmit}>Register</button>
      </form>
    </div>
  )
}

export default AdminSignUp