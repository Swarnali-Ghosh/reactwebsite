import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobile,setIsMobile] = useState(false);
  return (
      <>
      <nav className='mainNavbar'>
          <div className='mainNavLogo'>Hospital Name Logo</div>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}  onClick={()=>setIsMobile(false)} >
             <Link to="/" className='mainNavLinks'><li className='mainNavLi'>Home</li></Link> 
             <a href="#about" className='mainNavLinks'><li className='mainNavLi'>About</li></a>
             <a href="#doctor" className='mainNavLinks'><li className='mainNavLi'>Doctors</li></a>
             <a href="#blogs" className='mainNavLinks'><li className='mainNavLi'>Blogs</li></a>
             <a href="#career" className='mainNavLinks'><li className='mainNavLi'>Career</li></a>
          </ul>
          <button className='mainNavButton' onClick={()=>setIsMobile(!isMobile)}>
              {isMobile ? <i className="mainpageicon fa-solid fa-xmark"></i> : <i className="mainpageicon fa-solid fa-bars"></i>}
          </button>
      </nav>
      </>
  )
}
export default Navbar;