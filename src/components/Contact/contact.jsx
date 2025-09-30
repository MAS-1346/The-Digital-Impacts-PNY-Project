import React from "react";
import './contact.css';
const Contact = () => {
    return (
        <>
            <div className="heading">
                <h2 class="Services-heading">Feel Free To <span>Contact</span> Us By Submitting<br /><span>Form Or Contact Live Support</span></h2>
            </div>
            <div className="mainform">
                <div className="contactform">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13604.044251675825!2d74.3001229!3d31.5238561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919048452bc69d5%3A0xe752b7eb6859f9cd!2sRehmanpura%20Colony%2C%20Lahore%2C%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1758867890139!5m2!1sen!2s" width="600" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div class="contact-numbers">
                        <div>
                            <h2><svg stroke="currentColor" fill="#0796d6" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"></path></svg></h2>
                        </div>
                        <div>
                            <h4>+447424997026</h4>
                            <h4>+447900190002</h4>
                        </div>
                        <div>
                            <h2><svg stroke="currentColor" fill="#0796d6" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path></svg>
                            </h2>
                        </div>

                        <div class="ContactUs---Email">
                            <h4>info@thedigitalimpacts.com</h4>
                        </div>
                    </div>
                </div>
                <div className="formcard">
                    <form>
                        <label htmlFor="name"><span>Name</span></label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="your name"
                            required
                        />
                        <br />

                        <label htmlFor="sname"><span>Surname</span></label>
                        <br />
                        <input
                            type="text"
                            id="sname"
                            name="sname"
                            placeholder="your surname"
                        />
                        <br />

                        <label htmlFor="email"><span>Email</span></label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your email address"
                            required
                        />
                        <br />

                        <label htmlFor="phone"><span>Contact Number</span></label>
                        <br />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="123-45-678"
                        />
                        <br />
                        <button>
                            Submit
                        </button>
                        <br />
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact;