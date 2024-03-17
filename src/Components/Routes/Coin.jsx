import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Image from'../Assets/d2.png'
import Footer from '../Footer/Footer'
//import Coincontainer from '../Coinconatiner/Coincontainer'
import CoinAPI from './CoinAPI/CoinAPI'

const Coin = () => {
  return (
    <div>
      <Navbar />
      <Hero
      cName='hero-mid'
      HeroImg={Image}
      title='Crypto Coins'
      />
      <CoinAPI/>
      <Footer />
    </div>
  )
}

export default Coin