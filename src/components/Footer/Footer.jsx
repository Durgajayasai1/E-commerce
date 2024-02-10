import React from 'react'
import './footer.css'
import footer_logo from '../assets/logo_big.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>HarvestLink</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <FaInstagram className='iconfa'/>
                </div>
                <div className="footer-icons-container">
                    <FaFacebook className='iconfa'/>
                </div>
                <div className="footer-icons-container">
                    <FaLinkedinIn className='iconfa'/>
                </div>
                <div className="footer-icons-container">
                    <FaXTwitter className='iconfa'/>
                </div>
                <div className="footer-icons-container">
                    <FaPinterest className='iconfa'/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright &copy; 2024 - All Rights Reserved, HarvestLink</p>
            </div>
        </div>
    )
}

export default Footer