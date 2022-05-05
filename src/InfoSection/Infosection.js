import React, { useState } from 'react';
import './Infosection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import Infosectiondata from './Infosectiondata';



const Infosection = () => {
    const [datas] = useState(Infosectiondata);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2900,
        cssEase: "linear",
    }
    return (
        <>
        <div className='testimonial'>Our <span className="monial" >  Specialities</span></div>
        <div style={{ margin: '30px' }} className="infosection_div">
        <Slider {...settings}>
            {
                datas.map((data) => {
                    return (
                        <>
                        
                       
                        <div className='slider_track' >
                        <div className='cd_info'>
                            <div>
                                <img className="cus department_image" src={data.department_image} alt="" />
                            </div>
                            <div className='spdocCom' >
                                <h2 className='spdoc'>{data.spdoc}</h2>
                                <h2 className='c_comment' >{data.c_comment}</h2>
                            </div>
                            </div>
                            </div>
                        
                        </>
                    )
                })
            }
            </Slider>
            </div>
        </>

    );
}
export default Infosection;
