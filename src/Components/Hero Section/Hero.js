import React from 'react'
import "./Hero.css"

export default function Hero() {
  return (
    <div className='container hero-container'>
        <div className='hero-left'>
            <h1>Pay bills, get paid and manage cash flow</h1>
            <p>Tola combines accounts payable, receivable and cash flow management with working capital, helping save businesses time and money.</p>
            <a href='#' className='hero-btn'>
                <a>
                Get Started
                </a>
                <img src='./images/icons/icons8-right-arrow-50.png'></img>
            </a>
        </div>
        <div className='hero-right'>
            <div className='company-section'>
                <p>Backed by the same investors as</p>
                <div className='company-icon'>
                    <img className='icon' src='./images/icons/stripe.png'></img>
                    <img className='icon' src='./images/icons/paypal.png'></img>
                    <img className='icon' src='./images/icons/robinhood.png'></img>
                    <img className='icon' src='./images/icons/klarna.png'></img>
                    <img className='icon' src='./images/icons/cashapp.png'></img>
                    <img className='icon' src='./images/icons/checkout.png'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
