import './OnlineServices.css';
import OnlineServicedata from './OnlineServicedata';
import { useState } from 'react';
function OnlineServices() {
    const [data] = useState(OnlineServicedata);
    return (
        <>
            {data.map((service) => {
                return (
                    <>
                        <div key={service._id}>
                            <h1 className='headh1' >{service.headh1}</h1>
                            <div className="OScontainer" >
                                <div className="service">
                                    <div className='servicesrc'><img src={service.src} alt={service.sinfo} className="service_image"></img></div>
                                </div>
                                <div className="service_info">
                                    <div className="sinfo"><strong>{service.sinfo}</strong></div>
                                    <div className="pinfo"><b>{service.pinfo}</b></div>
                                    <div><button className="primary"
                                        onClick={() => { alert("Call us  now on 000 0000 0000 &  for a video consultation take an appointment now. pay rs.800/- and call us now on 11111 11111 for booking a ambulance ") }}>{service.green}</button></div>
                                </div>


                            </div>
                        </div>
                    </>
                )
            })}
        </>
    );
}
export default OnlineServices;