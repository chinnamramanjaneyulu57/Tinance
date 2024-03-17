import React from 'react'
import './CoinAPI.css'

const CoinAPIcard = (props) => {
  return (
    <div className='t-card'>
      <div className='t-image'>
        <img src={props.img} alt='img' />
      </div>
      <h4>{props.heading}</h4>
      <h5>Symbol: {props.symbol.toUpperCase()}</h5>
      <h5>Price: {props.price}$</h5>
      <h5>Rank: {props.rank}</h5>
    </div>
  )
}

export default CoinAPIcard