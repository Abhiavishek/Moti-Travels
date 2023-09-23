import axios from "axios";
import React, { useState } from "react";
import { ToastContainer ,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/usersignup.css';
import userReg from '../styles/userReg.jpg';
const UserSignUp = () => {
  let [name, setName] = useState();
  let [phone, setPhone] = useState();
  let [dob, setDob] = useState();
  let [aadhar_No, setAadhar] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [cpassword, setCpassword] = useState();

  let data = {name, phone, dob, aadhar_No, email, password}
  let HandleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8080/users`, data).then(()=>{
        alert("Successfully Registered");
        toast.success("Registered Successfully")
    }).catch(()=>{
        alert("Invalid Data")
        toast.error("Enter Valid Data");
    })
  }
  return (
    <div className="format">
      <div className="usersignup">
        <form>
          <h4>Enter Your Details to Register</h4>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <input
            type="tel"
            value={phone}
            pattern="[0-9]{10}"
            placeholder="Enter Your phone number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <input
            type="date"
            value={dob}
            placeholder="Enter Your Date of Birth"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <input
            type="tel"
            pattern="[0-9]{12}"
            value={aadhar_No}
            placeholder="Enter Your Aadhar Number"
            onChange={(e) => {
              setAadhar(e.target.value);
            }}
          />
          <br /> <br />
          <input
            type="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            value={password}
            placeholder="Create Your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            value={cpassword}
            placeholder="Confirm Your password"
            onChange={(e) => {
              setCpassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button onClick={HandleSubmit}>SignUp</button>
          <ToastContainer/>
        </form>
      </div>
      <img src={userReg} className="imgreg"/>
    </div>

  );
};

export default UserSignUp;
