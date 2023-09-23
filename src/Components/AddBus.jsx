import axios from 'axios';
import React, { useState } from 'react'

const AddBus = () => {
    let [name, setName] = useState();
    let [from, setFrom] = useState();
    let [to, setTo] = useState();
    let [busno, setBusno] = useState();
    let [nos, setNos] = useState();
    let [dop, setDop] = useState();
    let data = {name, from, to, busno,nos,dop};
    let admin = JSON.parse(localStorage.getItem('admin'));
    let addbus =(e)=>{
         e.preventDefault();
         axios.post(`http://localhost:8080/bus/${admin.id}`,data)
         .then((res)=>{
            // console.log(res.data.data.id);
            alert("Added Bus Successfully")
         }
         )
         .catch((err)=>{
            alert("Something Went Wrong")
         }
         )
    }
  return (
    <div>
        <form>
            <input type='text' value={name} placeholder='Enter Your Travel Agency' onChange={(e)=>{
                setName(e.target.value);
            }}/><br/><br/>
            <input type='text' value={from} placeholder='From' onChange={(e)=>{
                setFrom(e.target.value);
            }}/><br/><br/>
            <input type='text' value={to} placeholder='To' onChange={(e)=>{
                setTo(e.target.value)
            }}/><br/><br/>
            <input type='text' value={busno} placeholder='Enter the Bus No'
             onChange={(e)=>{setBusno(e.target.value)}}/><br/><br/>
            <input type='number' value={nos} placeholder='Enter the No of Sheets' onChange={(e)=>{
                setNos(e.target.value);
            }}/><br/><br/>
            <input type='date' value={dop} placeholder='Enter the Date of Departure' onChange={(e)=>{
                setDop(e.target.value);
            }}/><br/><br/>
            <button onClick={addbus}>Add Route</button>
        </form>
    </div>
  )
}

export default AddBus