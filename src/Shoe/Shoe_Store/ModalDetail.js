import React, { Component } from 'react'

export default class ModalDetail extends Component {
    renderModalBody = (item) => {
        let { name, image, price, description, shortDescription } = item
        return <>
            <img src={image} alt="" className='w-100' />
            <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
            <p className="text-success">$ {price}</p>
            <p>{description}</p>
        </>
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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button className="btn btn-dark" onClick={() => { this.props.handleAddToCart(this.props.viewingItem) }}>Add to cart</button>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
