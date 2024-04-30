import React, { Component } from 'react'

export default class ProductGrid extends Component {
  render() {

    let {img,title,p} = this.props

    return (
      <div className='product-grid'>
        <h3>{title}</h3>
        <p>{p}</p>
        <img src={img}></img>
      </div>
    )
  }
}
