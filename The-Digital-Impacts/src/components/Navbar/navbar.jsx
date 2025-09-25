import React from "react";
// import { Link } from "react-router-dom";
import './Navbar.css';
import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                    <img src={Logo} alt="logo" />
                <div className="navlink">
                    <ul>
                        <li> Home </li>
                        <li>  Services </li>
                        <li> About Us </li>
                        <li> Portfolio </li>
                    </ul>
                </div>
                <div>
                    <button className="contact-btn"> Contact Us </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;