import React from 'react'
import Image1 from '../Assets/c1.jpg'
import Image2 from '../Assets/c2.jpg'
import Image3 from '../Assets/c3.webp'
import Image4 from '../Assets/c9.png'
import Image5 from '../Assets/c5.jpeg'
import Image6 from '../Assets/c6.jpeg'
import Image7 from '../Assets/c7.jpeg'
import Image8 from '../Assets/c8.jpg'


import './Destination.css'
import Destinationdata from '../Destiantion/Destinationdata'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Tinance Private Limited</h1>
        <h4>Enjoy Safe Exchanges Here</h4>
        <Destinationdata 
          cName='first-des'
          heading='Advantages of Using Tinance to Buy and Sell Crypto'
          data='Tinance is an easy-to-use platform that offers a simplified and superior crypto trading experience that is unmatched by comparable platforms. As the saying goes, time is money. Tinance provides users fast bank withdrawals without passing on the costs to the end-user.'
          img1={Image1}
          img2={Image2}
        />
        <Destinationdata 
          cName='first-des-reverse'
          heading='If You’re New to Bitcoin Exchange - Tinance is Here to Help!'
          data='The process of using a Tinance Platform for the first time can be intimidating, especially when you’re trying to balance public addresses, different cryptocurrencies, and the concept of the blockchain itself. Tinance makes the process simple by providing a Feature-packed Trading API and a user interface that is easy to use for beginners and experienced cryptocurrency traders. Cryptocurrency exchange platforms are home to lots of trading and other transactions, and in order to have smooth transactions, Tinance provides a 24/7 support center staffed with experienced customer service teams. If it’s the first time a user is looking to buy Bitcoin or sell Crypto, Tinance’s learning center has abundant information on crypto trades.'
          img1={Image3}
          img2={Image4}
        />

        <Destinationdata 
          cName='first-des'
          heading='Don’t just Trade Bitcoin!'
          data='Bitcoin is just one of the many unique digital currencies that can revolutionize the world of payments. Tinance’s API leverages several easy-to-use features that bring the most functionality to the crypto trading platform. Users can also buy crypto pairs, including USD to Ethereum, XRP, and Litecoin, all under one roof.'
          img1={Image5}
          img2={Image7}
        />

        <Destinationdata 
          cName='first-des-reverse'
          heading='Trade Crypto Everywhere and Anywhere!'
          data='Tinance allows users to take advantage of low fees from anywhere in the world. It is not uncommon for platforms to restrict availability based on region. Fortunately, Tinance offers extensive services to users regardless of their point of transaction. With an optimized web and mobile interface, users can pay anyone in the world with just their cryptocurrency address.'
          img1={Image6}
          img2={Image8}
        />


    </div>
    
  )
}

export default Destination

//here in this we can make first-des by making copy paste of another set 
//instead we use class component to make dynamic of that using props
/*
<div className='first-des'>
<div className='des-text'>
    <h2>Taal Valcano, Batangas</h2>
    <p>Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things. Therefore, through this Essay on Travel, we will go through everything that makes travelling great.</p>
</div>
<div className='image'>
    <img src={Image1} alt='img' />
    <img src={Image2} alt='img' />
</div>
</div>*/
