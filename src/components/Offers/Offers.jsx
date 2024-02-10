import React from 'react'
import './offers.css'
import Onions from '../assets/onion-rip.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={Onions} alt="" />
        </div>
    </div>
  )
}

export default Offers