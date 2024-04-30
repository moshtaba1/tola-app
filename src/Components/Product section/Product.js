import React, {Component} from 'react'
import "./Product.css"
import ProductItem from './Product Item/ProductItem'
import ProductGrid from './Product grid/ProductGrid'

export default class Product extends Component {
    constructor (props) {
        super (props)
        this.state = {
            itemInfo: [
                {img: "./images/accounts-payable-1.webp", title: "Accounts payable" , p:"Manage, pay and reconcile all business bills"},
                {img: "./images/ar-1.webp", title: "Accounts receivable" , p:"Send invoices, set reminders and get paid"},
                {img: "./images/pay-later-feature-1.webp", title: "Pay later" , p:"Sell first, pay suppliers 30 to 90 days later"},
                {img: "./images/working-capital.webp", title: "Get paid early" , p:"Unlock revenue tied up in your invoices"}
            ]   
        }

    }
    render(){
        return (
          <>
          <div className='container product-container'>
              <div className='product-testemonial'>
                  <h2>Product</h2>
                  <p>Tola makes it easy for SMBs to pay suppliers, send invoices, get access to working capital and gain control over business cash flow in one place.</p>
              </div>
              <div className='divider'></div>
              <div className='product-items'>
                    {this.state.itemInfo.map(item => (
                        <ProductItem {...item}/>
                    ))}
              </div>
          </div>
          <div className='product-grid-container container'>
                    {this.state.itemInfo.map(item => (
                        <ProductGrid {...item}/>
                    ))}
          </div>
          </>
        )

    }
}
