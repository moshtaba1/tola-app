import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='nav-section'>
    <div className='nav-container'>
        <span>TOLA</span>
        <div className='nav-items'>
            <a href='#'>Product</a>
            <a href='#'>Sulotions</a>
            <a href='#'>Company</a>
            <a href='#'>Pricing</a>
            <button className='nav-btn'>Sign in</button>
            <button className='hero-btn '>Try for free</button>
        </div>
    </div>
    </div>
  )
}
