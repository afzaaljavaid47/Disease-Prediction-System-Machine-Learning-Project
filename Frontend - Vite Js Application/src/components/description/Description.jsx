import React from 'react'
import './Description.scss'
// Import Image
import provider from '../../assets/provider.png'
const Description = () => {
  return (
    <div className='desc'>
        <div className="desc_container">
            <div className="left">
            <img src={provider} alt="provider" />
            </div>
            <div className="right">
            <h1>Leading Healhcare system</h1>
            <hr />
            <p>
                Health Care System provide you the Initial diagnosis of the cronic diseases and in additional machine learning based diet recommendation model recommend you the best diet plan for your health
            </p>
            </div>
        </div>
    </div>
  )
}

export default Description