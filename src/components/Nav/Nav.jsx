import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './nav.css'
import logo from '../assets/logo.png'
import { GiShoppingCart } from "react-icons/gi";

const Nav = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>HarvestLink</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{textDecoration:'none', color: "var(--color-primary)"}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("vegetables")}}><Link to="/vegetables" style={{textDecoration:'none', color: "var(--color-primary)"}}>Vegetables</Link>{menu==="vegetables"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("fruits")}}><Link to="/fruits" style={{textDecoration:'none', color: "var(--color-primary)"}}>Fruits</Link>{menu==="fruits"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("grains")}}><Link to="/grains" style={{textDecoration:'none', color: "var(--color-primary)"}}>Grains</Link>{menu==="grains"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to="/login" style={{textDecoration:'none'}}><button>Login</button></Link>
       <Link to="/cart" style={{textDecoration:'none'}}><GiShoppingCart className='cart-icon'/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Nav