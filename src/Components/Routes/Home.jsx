import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Image from '../Assets/ho.avif'
import Destination from '../Destiantion/Destination'
import Trip from '../Coinconatiner/Coincontainer'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
      cName='hero'
      HeroImg={Image}
      title='Welcome to Tinance Private Limited'
      text='Buy, Sell and Store Crypto'
      btnClass='btnclass'
      btnText='Trade Now'
      url='/'

       />
       <Destination />
       <Trip />
       <Footer />

    </div>

  )
}

export default Home