import React from 'react'
import './Amount.css'

const Amount = () => {
  return (
    <div className='amount-container'>

        <div className="minus">
            <img src="./static/image/minus.png" alt="" />
        </div>
        <span>1</span>
        <div className="plus">
            <img src="./static/image/plus.png" alt="" />
        </div>
    </div>
  )
}

export default Amount