import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderListShoe = () => {
        return this.props.list.map((item, index) => {
            return <ProductItem item={item} key={index}
                handleAddToCart={this.props.handleAddToCart}
                handleViewDetail={this.props.handleViewDetail}
            />
        })
    }
    render() {
        return (
            <div className='col-12 row'>
                {this.renderListShoe()}
            </div>
        )
    }
}
