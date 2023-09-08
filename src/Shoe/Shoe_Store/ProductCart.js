import React, { Component } from 'react'

export default class ProductCart extends Component {
    renderCart = () => {
        let { cart } = this.props
        return cart.map((item, index) => {
            let { name, price, image, soLuong, id } = item
            return <tr key={index}>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <img src={image} alt="" width={100} />
                </td>
                <td>
                    <button className="btn btn-dark"
                        onClick={() => { this.props.handleChangeQuantity(id, false) }}
                    >-</button>
                    <b>{soLuong}</b>
                    <button className="btn btn-success"
                        onClick={() => { this.props.handleChangeQuantity(id, true) }}
                    >+</button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        this.props.handleRemove(id)
                    }}>Delete</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div className='col-12'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                </table>
            </div>
        )
    }
}
