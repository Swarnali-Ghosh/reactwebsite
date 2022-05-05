import React from 'react'
import './Header.css';
const Header = () => {
    return (
        <>
            <div className="banner">
                <p>Welcome to our website</p>
                <h1>WE ARE HERE FOR YOUR CARE</h1>

                <a href="#doctor">
                    <button className="homepageScroll">
                        Scroll
                    </button>
                </a>
            </div>
        </>
    )
}

export default Header
