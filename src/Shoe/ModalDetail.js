import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ADD_TO_CART } from './constant/constant'

export class ModalDetail extends Component {
    renderModalBody = (item) => {
        let { name, image, price, description, shortDescription } = item
        return <div className='position-relative'>
            <div className="position-absolute">
                <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                <p className="text-success">$ {price}</p>
            </div>
            <img src={image} alt="" className='w-100' />
            <p>{description}</p>
        </div>
    }
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            {this.renderModalBody(this.props.viewingItem)}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-dark" onClick={() => { this.props.handleAddToCart(this.props.viewingItem) }}>Add to cart</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return { viewingItem: state.shoeReducer.viewingItem }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddToCart: (shoe) => {
            let action = {
                type: ADD_TO_CART,
                payload: shoe
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDetail)
