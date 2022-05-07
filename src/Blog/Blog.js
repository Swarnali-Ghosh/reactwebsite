import './Blog.css'
import Blogdata from './Blogdata';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Blog = () => {
    const [data, setData] = useState(Blogdata);
    const filterResult = (catItem) => {
        const result = Blogdata.filter((curData) => {
            return curData.title === catItem;
        });
        setData(result);
    }
    return (
        <>
            <div className='back' id="blogs"><b>OUR BLOGS</b></div>
            <div className='containerfluid'>
              
                    <div className='colmd'>
                        <button className="primary1" onClick={() => filterResult('Nutrition and diet')}>Nutrition and diet</button>
                        <button className="primary1" onClick={() => filterResult('Orthopaedics')}>Orthopaedics</button>
                        <button className="primary1" onClick={() => filterResult('Cardiology')}>Cardiology</button>
                        <button className="primary1" onClick={() => filterResult('Oncology')}>Oncology</button>
                        <button className="primary1" onClick={() => filterResult('Neurology')}>Neurology</button>
                        <button className="primary1" onClick={() => filterResult('Gastroenterology')}>Gastroenterology</button>
                    </div>
                    <div className='=colm'>
                        <div className='row'>
                            {data.map((values) => {
                                const { id, title, cardtitle, cardtext, srcd } = values;
                                return (
                                        <div className='wrapper2' key={id}>
                                            <div className="card" >
                                                <img src={srcd} className="cardimgtop" alt=" " />
                                                <div className="cardbody">
                                                    <h6 className='title'>{title}</h6>
                                                    <h5 className="cardtitle"><b>{cardtitle}</b></h5>
                                                    <p className="cardtext">{cardtext}</p>
                                                    <Link to={`/readeachblog/${values.id}`}><button className="primary">Read More</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                );
                            })}

                        </div>
                    </div>
               
            </div>
        </>
    )
}
export default Blog;