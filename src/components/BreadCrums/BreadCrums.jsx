import React from 'react'
import './BreadCrums'
import { FaAngleRight } from "react-icons/fa6";
import './breadcrums.css'

const BreadCrums = (props) => {
    
    const {product}=props;

  return (
    <div className='breadcrum'>
        HOME <FaAngleRight /> SHOP <FaAngleRight /> {product.category} <FaAngleRight /> {product.name}
    </div>
  )
}

export default BreadCrums