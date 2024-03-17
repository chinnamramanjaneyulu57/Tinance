import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top-row'>
            <div>
                <h2>Tinance Private Limited</h2>
                <p>Buy, Sell and Store Crypto</p>
            </div>
            <div>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-behance-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
            </div>
        </div>
        <div className='bottom-row'>
            <div>
                <h4>PRODUCTS</h4>
                <a href='/'>Instant Exchange</a>
                <a href='/'>SBP</a>
                <a href='/'>Spot Trade</a>
                <a href='/'>Crypto Basket</a>
                <a href='/'>Sub Broker</a>
                <a href='/coins'>Coin Listings</a>
                <a href='/coins'>Coin Info</a>
            </div>
            <div>
                <h4>POLICIES</h4>
                <a href='/'>Privacy Policy</a>
                <a href='/'>KYC</a>
                <a href='/'>Cookie Statement</a>
                <a href='/'>Risk Warning</a>
                <a href='/'>Terms of Use</a>
                <a href='/'>Coupons</a>
            </div>
            <div>
                <h4>COMPANY</h4>
                <a href='/about'>About Us</a>
                <a href='/'>Blog</a>
                <a href='/'>Fee Structure</a>
                <a href='/'>Newsroom</a>
                <a href='/'>Venture</a>
                <a href='/'>Proof of Reserve</a>
            </div>
            <div>
                <h4>ADDITIONALS</h4>
                <a href='/Faq'>FAQ's</a>
                <a href='/'>Chat</a>
                <a href='/'>Trading Guide</a>
                <a href='/'>API Documentation</a>
            </div>
        </div>

    </div>
  )
}

export default Footer