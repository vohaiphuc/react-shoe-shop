import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ADD_TO_CART, VIEW_DETAIL } from './constant/constant'

export class ProductItem extends Component {
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

const mapStateToProps = (state) => {
    return {
        // list: state.shoeReducer.shoeArr
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddToCart: (shoe) => {
            let action = {
                type: ADD_TO_CART,
                payload: shoe
            }
            dispatch(action)
        },
        handleViewDetail: (shoe) => {
            let action = {
                type: VIEW_DETAIL,
                payload: shoe
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)