import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './Gallery.css';
import Slider from "react-slick";
const Gallery = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2900,
        cssEase: "linear",

        responsive: [{
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,   
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };

    return (
        <>
        <div className='main_gallery'>
        <div className='gallery'>Gallery</div>
        <Slider {...settings}>
            <div className='slider_track_galary' >
            <img className="galaryImage" src="./images1/image_g5.jpg" alt="" />
            </div>



            <div className='slider_track_galary' >
            <img className="galaryImage" src="./images1/image_g3.jpg" alt="" />
            </div>

      

            <div className='slider_track_galary' >
            <img className="galaryImage" src="./images1/image_g7.jpg" alt="" />
            </div>





            <div className='slider_track_galary' >
            <img className="galaryImage" src="./images1/image_g4.jpg" alt="" />
            </div>
        </Slider>
        </div>
        </>
    )
}

export default Gallery