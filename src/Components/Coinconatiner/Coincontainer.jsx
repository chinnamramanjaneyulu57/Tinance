import './Coincontainer.css'
import React from 'react'
import Coincontainerdata from './Coincontainerdata'
import Image1 from '../Assets/l1.webp'
import Image2 from '../Assets/l2.png'
import Image3 from '../Assets/l9.png'
import Image4 from '../Assets/l8.png'
import Image5 from '../Assets/l6.webp'

const Trip = () => {
  return (
    <div className='trip'>
        <h1>List of Top 5 Crypto Coins</h1>
        <div className="tripcard">
           <Coincontainerdata
            img={Image1}
            heading='Bitcoin'
            symbol='Symbol : BTC'
            price='Price : 41473.00$'
            marketcap='Market cap: $839.6 billion'
           />
           <Coincontainerdata
            img={Image2}
            heading='Ethereum'
            symbol='Symbol : ETH'
            price='Price : 2466.81$'
            marketcap='Market cap: $303.8 billion'
           />
           <Coincontainerdata
            img={Image3}
            heading='Tether'
            symbol='Symbol : USDT'
            price='Price : 1.00$'
            marketcap='Market cap: $95.1 billion'
           />
           <Coincontainerdata
            img={Image4}
            heading='Binance Coin'
            symbol='Symbol : BNB'
            price='Price : 314.16$'
            marketcap='Market cap: $48.1 billion'
           />
          <Coincontainerdata
            img={Image5}
            heading='Solana'
            symbol='Symbol : SOL'
            price='Price : $95.31'
            marketcap='Market cap: $41.6 billion'
           />
           
           

        </div>
    </div>
  )
}

export default Trip