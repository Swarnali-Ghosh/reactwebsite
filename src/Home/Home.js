import React from 'react'
import Navbar from '../Navbar/Navbar'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer';
import Testimonials from '../Testimonials/Testimonials';
import Career from '../Career/Career';
import Doctor from '../Doctor/Doctor'
import OnlineServices from '../OnlineServices/OnlineServices';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Infosection from '../InfoSection/Infosection';
import Gallery from '../Gallery/Gallery';
import Copyright from '../Copyright/Copyright';

const Home = () => {
    document.title = `Hospital Website`   
    return (
        <> 
            <Navbar/> 
            <Header />  
            <AboutUs/> 
            <Doctor/>
            <Infosection /> 
            <OnlineServices />
            <Testimonials />
            <Blog />
            <Gallery /> 
            <Career />
            <Footer />
            <Copyright />
        </>
    )
}

export default Home