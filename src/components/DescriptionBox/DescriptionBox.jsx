import React from 'react'
import './descriptionbox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    From seeds to tools, our online marketplace offers
                    everything for modern farming, ensuring success with quality
                    products and expert guidance.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox