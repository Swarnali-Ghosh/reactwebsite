import React, {useState} from 'react';
import Doctordata from './Doctordata'
import { Link } from 'react-router-dom';
import './DoctorSection.css'
const DoctorSection = () => {
  const [data] = useState(Doctordata);
  const [query,setQuery] = useState("");
  document.title = `Our Doctors`

  const filteredData = data.filter(({ d_name }) => {
    if (d_name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <>
   
     <Link to="/"><button className="btnR"> <i className="fa-solid fa-arrow-left"></i> Back to Home</button></Link>
      <div className='search'>
          <input className='searchbox' placeholder="Search by doctor name..." type="text" onChange={e=>setQuery(e.target.value)} />
      </div>

      {query && filteredData.length === 0 && (
        <div className='sorry'>Sorry, this name does not exist</div>
      )}
        <div className='wrapper' id="doctor">
            {filteredData
            .map((values) => {
                return (
                        <div className="doctor" key={values.id}>
                            <img className="doctor-img" src={values.src} alt={values.d_name}/>
                            <span className="d_name"><b>{values.d_name}</b></span>
                            <span className="d_info">{values.d_info}</span>
                            <div>
                                   <div><button className="primary" 
                                    onClick={()=>{alert("Call us  now on 000 0000 0000 or 111 1111 1111 for booking an appoimentment")}}>
                                    {values.primary}</button> </div> 
                            </div>
                        </div>
                );

            })}
        </div>
    </>
  )
}

export default DoctorSection
