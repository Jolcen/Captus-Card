import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <div className='details-container'>
        <span className='name'>Standard Captus</span>
        <span className='description'>Succulent</span>
        <span className='price'>$20.0</span>
        <div className='score'>
            <img src="./static/image/star.jpg" alt="" />
            <img src="./static/image/star.jpg" alt="" />
            <img src="./static/image/star.jpg" alt="" />
            <img src="./static/image/star.jpg" alt="" />
            <span>2 reviews</span>
        </div>
    </div>
  )
}

export default Details