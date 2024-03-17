import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import SignupForm from './SignupForm/SignupForm'
import Footer from '../Footer/Footer'
import Image from '../Assets/k1.jpg'
const Signup = () => {
  return (
    <div>

      <Navbar />
      <Hero
        cName='hero-mid'
        HeroImg={Image}
        title='Signup'
      />
      <SignupForm/>
      <Footer />

      
    </div>
  )
}

export default Signup