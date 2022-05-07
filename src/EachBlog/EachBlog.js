import React,{useState} from 'react'
import './EachBlog.css'
import { Link, useParams } from 'react-router-dom';
import EachBlogData from './EachBlogData';
const EachBlog = () => {
    const {id} = useParams();
    const [ data] = useState(EachBlogData.find((data) => data.id === id));
    document.title = `Blog Section`
  return (
    <>
    <Link to="/"><button className="btnR"> <i className="fa-solid fa-arrow-left"></i> Back to Home</button></Link>
            <Link to={`/readeachblog/${data.id}`} className='link'>
            <div className='datadiv' key={data.id}>
            <img className='srcBlog' src={data.srcBlog} alt={data.id}/> 
            <h1 className='firstparah'>{data.firstparah}</h1>
            <p className='firstpara'>{data.firstpara}</p>
            <h1 className='secondparah'>{data.secondparah}</h1>
            <p className='secondpara'>{data.secondpara}</p>
            <h1 className='thirdparah'>{data.thirdparah}</h1>
            <p className='thirdpara'>{data.thirdpara}</p>
            <h1 className='forthparah'>{data.forthparah}</h1>
            <p className='forthpara'>{data.forthpara}</p>
            </div> 
            </Link>
   </>
  )
}

export default EachBlog