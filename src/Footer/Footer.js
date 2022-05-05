import './Footer.css';
function Footer() {
    return (
        <>
            <div className="footer">

                <div className="footer_column">
                    <div className="spanDIV">
                        <span className="sp">QUICK LINKS</span>
                        <span className="span_border"></span>
                    </div>
                    <ul>
                        <li><i className="fa fa-chevron-right"></i><a href="#about"> About Us</a></li>
                        <li><i className="fa fa-chevron-right"></i><a href="#doctor"> Find a doctor</a></li>
                        <li><i className="fa fa-chevron-right"></i><a href="#blogs"> Blogs</a></li>
                        <li><i className="fa fa-chevron-right"></i><a href="#career"> Careers</a></li>
                    </ul>
                </div>
               
                <div className="footer_column">
                    <div className="spanDIV">
                        <span className="sp">DOWNLOAD THE APP</span>
                        <span className="span_border"></span>
                    </div>
                    <ul>
                        <a href="https://play.google.com/"><img className="download" src='/images1/appstore.png' alt=""/></a>
                    </ul>
                </div>
                <div className="footer_column">
                    <div className="spanDIV">
                        <span className="sp">Follow Us</span>
                        <span className="span_border"></span>
                    </div>
                    
                    <div className="social">
                        <div className='fafa'><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></div>
                        <div className='fafa'><a href="https://www.instagram.com/"><i className="fa-brands fa-twitter"></i></a></div>
                        <div className='fafa'><a href="https://twitter.com/i/flow/"><i className="fa-brands fa-instagram"></i></a></div>
                        <div className='fafa'><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></div>
                    </div>
                    <div className="spanDIV">
                        <span className="sp">Contact Us</span>
                        <span className="span_border"></span>
                        <span className='contactt'><i class="fa-solid fa-phone"></i> 11111 11111</span>
                        <span className='contactt'><i class="fa-solid fa-location-dot"></i> 10/21,J.C.Ghosh Lane,Kolkata-700066</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;

