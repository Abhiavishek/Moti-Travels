import React from 'react'
import error from '../styles/error.jpg'
import '../styles/error.css';
const Error = () => {
  return (
    <div className='errordiv'>
        <div>
        <marquee behavior="" direction=""><h1 className='errorheading'>Error 404</h1></marquee>
        <img src={error} className='errorimg'/>
    </div>
    </div>
  )
}

export default Error