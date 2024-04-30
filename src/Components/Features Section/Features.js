import React from 'react'
import './Features.css'

export default function Features() {
  return (
    <>
    <div className='features-title-container container'>
        <h2>Features</h2>
        <p>We have built the best in class tools to manage the requirements of any small business.</p>
    </div>
    <div className='features-secend container'>
        <div className='features-secend-left'>
            <h3>Real-time accounting sync</h3>
            <p>Integrate with Quickbooks or Xero. Reconcile all business bills and vendors in real time.</p>
            <div className='features-secend-links'>
                <a href='#'>Automatic bill capture</a>
                <a href='#'>E-mail forward your bills</a>
                <a href='#'>Approval workflows</a>
                <a href='#'>Schedule payments</a>
                <a href='#'>Easy vendor onboarding</a>
                <a href='#'>Track payment status</a>
            </div>
        </div>
        <img src='./images/ap-accounting-sync.webp'/>
    </div>
    </>
  )
}
