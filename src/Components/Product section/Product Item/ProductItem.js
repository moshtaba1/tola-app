import React , {Component} from 'react'

export default class ProductItem extends Component {

    render() { 

        let {img,title,p} = this.props

        return (
            <>
            <div className='product-item-container'>
                <div className='product-item-img' >
                <img src={img}></img>
                </div>
                <div className='product-item-content' >
                    <h4>{title}</h4>
                    <p>{p}</p>
                </div>
            </div>
            </>
        );
    }
}
