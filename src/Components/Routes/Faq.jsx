import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Image from '../Assets/d2.png'
import Footer from '../Footer/Footer'
//import AboutData from './AboutContent/AboutData'
import Faqdata from './FaqContent/Faqdata'
const Faq = () => {
  return (
    <div>
      <Navbar />
      <Hero
      cName='hero-mid'
      HeroImg={Image}
      title='FAQs'
      //text='Choose Your Favourite Destination'
      //btnClass='btnclass'
      //btnText='Travel Plan'
      //url='/'
      />
      <Faqdata/>
      <Footer />
    </div>
  )
}

export default Faq