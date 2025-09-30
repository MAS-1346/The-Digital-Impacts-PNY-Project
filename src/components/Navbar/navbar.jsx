import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <img src={Logo} alt="logo" />
                <div className="navlink">
                    <ul>
                        <li><NavLink to="/" end> Home </NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    </ul>
                </div>
                <div>
                    <button className="contact-btn">
                        <NavLink to="/contact">Contact Us</NavLink>
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;