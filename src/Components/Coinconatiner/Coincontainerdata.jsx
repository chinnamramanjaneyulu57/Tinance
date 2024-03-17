import React from 'react'
import './Coincontainer.css'

const Tripdata = (props) => {
  return (
    <div className='t-card'>
      <div className='t-image'>
        <img src={props.img} alt='img' />
      </div>
      <h4>{props.heading}</h4>
      <h5>{props.symbol}</h5>
      <h5>{props.price}</h5>
      <h5>{props.marketcap}</h5>
    </div>
  )
}

export default Tripdata