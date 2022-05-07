import React, {useState} from 'react';
import Doctordata from './Doctordata'
import { Link } from 'react-router-dom';

import './DoctorSection.css'
const DoctorSection = () => {
  const [data] = useState(Doctordata);
  const [query,setQuery] = useState("");
  document.title = `Our Doctors`
  return (
    <>
   
     <Link to="/"><button className="btnR"> <i className="fa-solid fa-arrow-left"></i> Back to Home</button></Link>
      <div className='search'>
          <input className='searchbox' placeholder="Search by doctor name..." type="text" onChange={e=>setQuery(e.target.value)} />
      </div>


        <div className='wrapper' id="doctor">
            {data.filter((val)=>{
              if(query === " "){
                return val
              }
              else if(val.d_name.toLowerCase().includes(query.toLowerCase())){
                return val
              }
              else{
                return false
              }
            
            })
            .map((values) => {
                const { id, src, d_name, d_info, primary } = values;
                return (
                        <div className="doctor" key={id}>
                            <img className="doctor-img" src={src} alt={d_name}/>
                            <span className="d_name"><b>{d_name}</b></span>
                            <span className="d_info">{d_info}</span>
                            <div>
                                   <div><button className="primary" 
                                    onClick={()=>{alert("Call us  now on 000 0000 0000 or 111 1111 1111 for booking an appoimentment")}}>
                                    {primary}</button> </div> 
                            </div>
                        </div>
                );

            })}
        </div>
    
    </>
  )
}

export default DoctorSection