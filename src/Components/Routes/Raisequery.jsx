import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Image from '../Assets/k1.jpg'
import Footer from '../Footer/Footer'
import ContactForm from './ContactForm/ContactForm'

const Raisequery = () => {
  return (
    <div>
      <Navbar />
      <Hero
      cName='hero-mid'
      HeroImg={Image}
      title='Raise A Query'
      />
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default Raisequery