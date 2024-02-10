import React from 'react'
import './productdisplay.css'
import { FaStar } from "react-icons/fa6";

const ProductDisplay = (props) => {

  const { product } = props;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className='productdisplay-main-img' />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className='dull-star' />
          <p>(120)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">&#8377;{product.old_price}</div>
          <div className="productdisplay-right-price-new">&#8377;{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Onion is a vegetable which is almost like a staple in Indian food.
          This is also known to be one of the essential ingredients of raw salads.
        </div>
        <div className="productdisplay-right-quantity">
          <h1>Select Quantity</h1>
          <div className="productdisplay-right-quantities">
            <div>Grams(g)</div>
            <div>Kilograms(kg)</div>
            <div>Quintal(q)</div>
            <div>Tonne(t)</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className='product-display-right-category'><span>Category: </span>vegetables, fruits, grains</p>
        <p className='product-display-right-category'><span>Tags: </span>Fresh, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay