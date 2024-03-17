import React, { useEffect, useState } from 'react'
import './CoinAPI.css'
import '../CoinAPI/CoinAPIcard'
import axios from 'axios'
import CoinAPIcard from '../CoinAPI/CoinAPIcard'
const CoinAPI = () => {
    const[search,setSearch]=useState('');
    const[coin,setCoin]=useState([]);
    const handler=e=>{
        setSearch(e.target.value);
    }
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false&locale=en')
        .then(
            res=>{
                setCoin(res.data)
                console.log(res.data[0])
            })
        },[])

  return (
    <>
        <div className='trip'>
            <input value={search} onChange={handler} placeholder='Search Crypto here...'/>
            

            {
                <div className='tripcard'>
                    {coin.filter(crypto=>(crypto.name.toLowerCase().includes(search.toLowerCase())) || (crypto.symbol.toLowerCase().includes(search.toLowerCase()))).map(crypto=>
                        <CoinAPIcard
                            img={crypto.image}
                            heading={crypto.name}
                            symbol={crypto.symbol}
                            price={crypto.current_price}
                            rank={crypto.market_cap_rank}
                        />
                    )}
                </div>
            }
        </div>
    </>
    
  )
}

export default CoinAPI