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
import {Helmet} from "react-helmet";
const Home = () => {
    return (
        <> 
        <Helmet title='Hospital website'></Helmet>
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