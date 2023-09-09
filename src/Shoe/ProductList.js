import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

export class ProductList extends Component {
    renderListShoe = () => {
        return this.props.list.map((item, index) => {
            return <ProductItem item={item} key={index}
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

const mapStateToProps = (state) => {
    return {
        list: state.shoeReducer.shoeArr
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
