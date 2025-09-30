import React from "react";
import './footer.css';
import USA from '../../assets/USA Flag.jpg';
import UK from '../../assets/UK Flag.jpg';
import Canada from '../../assets/Canada Flag.jpg';
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footeritems">
                    <div className="footercontent">
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Why Choose Us</p>
                        <p>Team</p>
                        <p>Pricing & Plans</p>
                        <p>Contacts</p>
                        <p>Investors</p>
                        <img src={USA} alt="USA Flag" className="flag" />
                        <h5>USA:</h5>
                        <p>1st Avenue, SW, Hickory,NC, USA<br />Email: info@thedigitalimpacts.com</p>
                    </div>
                    <div className="footercontent">
                        <h3>SERVICES</h3>
                        <p>Web Design & Development</p>
                        <p>Why Choose Us</p>
                        <p>Specialized SEO Services</p>
                        <p>Specialized Social Services</p>
                        <p>Specialized Graphics Services</p>
                        <p>Investors</p>
                        <img src={UK} alt="USA Flag" className="flag" />
                        <h5>UK:</h5>
                        <p>Oldham Greater Manchester, United Kingdom<br />Email: info@thedigitalimpacts.com</p>
                    </div>
                    <div className="footercontent">
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Why Choose Us</p>
                        <p>Team</p>
                        <p>Pricing & Plans</p>
                        <p>Contacts</p>
                        <p>Investors</p>
                        <img src={Canada} alt="USA Flag" className="flag" />
                        <h5>USA:</h5>
                        <p>1st Avenue, SW, Hickory,NC, USA<br />Email: info@thedigitalimpacts.com</p>
                    </div>
                </div>
                <div className="borderline"></div>
                <h4>Copyright © 2022 The Digital Impacts. All rights reserved</h4>
            </div>

        </>
    );
}
export default Footer;