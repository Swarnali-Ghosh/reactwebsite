import "./AboutUs.css";

const AboutUs = () => {
    return (
        <>
            <div id="about" className="about">
                <div className="aboutus">ABOUT US</div>

                <div className="aboutparaimgdiv">

                    <div className="aboutparasmg">
                        We started our journey in 2008 with a modest number of 40 beds, xxxxx xxxxx
                        Specialist Hospital today is the largest and busiest hospital in Eastern Region. Not
                        only does it look into almost all aspects of medical care by renowned doctors, but
                        it's paramedical Staff,investigation facilities and support services are also beyond
                        compare. With its 175 beds,it has a almost 100% occupancy rate and is looking forward to incorporate a new 5 storey building with a most modern pathology
                        section, modular OT and various super specialty clinics making it the one stop
                        destination for all patients with illness, critical or otherwise.
                    </div>
                   

                    <div className="aboutimgsm">
                        <img className="aboutimgsmtag" src="./images1/hospital.jpg" alt="" />
                    </div>
                </div>
                <div className="ddiv Cdiv2">
                    <h3 className="abf">Location</h3>
                    <p className="pabf"><i className="fa-solid fa-location-dot"></i> 10/21,J.C.Ghosh Lane,Kolkata-700066.</p>
                </div>
                <div className="ddiv Cdiv2">
                    <h3 className="abf">Contact Us</h3>
                    <p className="pabf"><i className="fa-solid fa-phone"></i> 11111 11111</p>
                    <p className="pabf"><i className="fa-solid fa-phone"></i> 00000 00000</p>
                </div>
                <div className="ddiv Cdiv2">
                    <h3 className="abf">Our vision</h3>
                    <p className="pabf">Is to reach to the lowest strata of the society with high class medical services.</p>
                </div>
                <div className=" ddiv Cdiv2">
                    <h3 className="abf">Our mission</h3>
                    <p className="pabf">We aim to provide high class medical services in a clean and hygenic environment with top class infrastructure at affordable prices</p>
                </div>
            </div>
        </>
    )
};

export default AboutUs;