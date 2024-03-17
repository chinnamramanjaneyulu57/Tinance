import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Image from '../Assets/d2.png'
import Footer from '../Footer/Footer'
import AboutData from './AboutContent/AboutData'
const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
      cName='hero-mid'
      HeroImg={Image}
      title='About Us'
      //text='Choose Your Favourite Destination'
      //btnClass='btnclass'
      //btnText='Travel Plan'
      //url='/'
      />
      <AboutData />
      <Footer />
    </div>
  )
}

export default About