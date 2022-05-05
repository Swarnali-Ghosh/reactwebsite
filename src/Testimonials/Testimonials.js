import './Testimonials.css';
import prince from './images/prince.jpg';
import image5a from './images/image5a.jpg';
import image6 from './images/image6.jpg';
import image10 from './images/image10.jpeg';
function Testimonials() {
    return (
        <>
        
        <div className="testimonials">
            <div className="block"> <span>TESTI<span className="tspan">MONIALS</span></span></div>
            <div className="all-tm">
                <div className="testimonials-1">
                    <div className="dp-span">
                        <img src={prince} alt=" "/><span><b>Soma Ghosh</b></span>
                    </div>
                    <div className="opi">
                    <i className="fa fa-quote-left fa-2x "></i>
                        This hospital has highly qualified experienced and efficient doctors
                        courtesy is the hall mark. The staff including the sisters and matrons
                        have pleasant manners and even ready to help at the call of patients.
                        No doubt the hospital is rendering great services to humanity which is exemplary.
                        <i className="fa fa-quote-right fa-2x "></i>
                    </div>
                </div>

                <div className="testimonials-1">
                    <div className="dp-span">
                        <img src={image5a} alt="" /><span><b>Madhusudan Das</b></span>
                    </div>
                    <div className="opi">
                    <i className="fa fa-quote-left fa-2x "></i>
                        Coming to a nursing home as a patient is not a pleasure but my stay here for about 7 days was
                        exceedingly pleasant.
                        <i className="fa fa-quote-right fa-2x "></i>
                    </div>
                </div>

                <div className="testimonials-1">
                    <div className="dp-span">
                        <img src={image6} alt=""/><span><b>Zumi rao</b></span>
                    </div>
                    <div className="opi">
                    <i className="fa fa-quote-left fa-2x "></i>
                        Very professional and trained staff, very caring as well. Felt at home, thank you BVC
                        <i className="fa fa-quote-right fa-2x "></i>
                    </div>
                </div>

                <div className="testimonials-1">
                    <div className="dp-span">
                        <img src={image10} alt=""/><span><b>Som Roy</b></span>
                    </div>
                    <div className="opi">
                    <i className="fa fa-quote-left fa-2x "></i>
                        <p>The nursing team made me feel at home completely and much more than a beautiful view
                            it is a caring institution of which Calcutta can be proud. The food was excellent. Medical and
                            nursing care was very good.
                            Doctors and the administration gave their best. I am grateful to them.</p>
                            <i className="fa fa-quote-right fa-2x "></i>
                    </div>
                </div>

            </div>
           
        </div>
        </>
    );
}
export default Testimonials;
