import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let item = this.props.item
        let { name, price, image } = item
        return (
            <div className='col-3 d-flex flex-column justify-content-between mb-4'>
                <div onClick={() => { this.props.handleViewDetail(item) }} data-toggle="modal" data-target="#exampleModal">
                    <img src={image} alt="" className='w-100 bg-light' />
                    <p>{name}</p>
                </div>
                <div>
                    <p className='font-weight-bold'>$ {price}</p>
                    <button className="btn btn-dark" onClick={() => { this.props.handleAddToCart(item) }}>Add to cart</button>
                </div>
            </div>
        )
    }
}
