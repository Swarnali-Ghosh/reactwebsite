import React from 'react'
import { Link } from 'react-router-dom'
import './Doctor.css'
const Doctor = () => {
  return (
    <>
    <div className='doctor_sec'>
     <div className=' gap'>Our Doctors</div>
      <div className='doctor_home' id="doctor">
     
        <div className='hmdi home_doctor'>
          <img src="/images1/doctorhm.jpg" alt="" className='doctorimghome'/>
        </div>
        <div className='hmdp home_doctor'>
          <p><b>Be healthy now is so simple</b></p>
          <h1>We Take Care Of Your Health</h1>
         <Link to="/doctorsection"><button className='primary'>Find a doctor</button></Link>
        </div>
      </div>
      </div>
    </>
  )
}

export default Doctor