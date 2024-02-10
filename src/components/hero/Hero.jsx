import React from 'react'
import './hero.css'
import hand_icon from '../assets/hand_icon.png'
import hero_image from '../assets/heroillu.svg'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW PRODUCTS</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Products</p>
                    <p>for Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Products</div>
                    <FaArrowRight />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero