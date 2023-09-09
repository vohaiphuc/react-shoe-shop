import React, { Component } from 'react'

export default class ProductCart extends Component {
    renderCart = () => {
        let { cart } = this.props
        if (cart.length < 1) return <tr>Giỏ hàng rỗng</tr>
        return cart.map((item, index) => {
            let { name, price, image, soLuong, id } = item
            return <tr key={index}>
                <td className='align-middle'>
                    <i
                        class="fa fa-times-circle text-black-50"
                        onClick={() => {
                            this.props.handleRemove(id)
                        }}
                        style={{ cursor: 'pointer', fontSize: '20px' }}
                    ></i>
                </td>
                <td className='align-middle'>
                    <img src={image} alt="" width={100} />
                </td>
                <td className='align-middle text-success text-left font-weight-bold'>{name}</td>
                <td className='align-middle'>{price}</td>
                <td className='align-middle'>
                    <button className="btn btn-dark"
                        onClick={() => { this.props.handleChangeQuantity(id, false) }}
                    >-</button>
                    <b className='mx-2'>{soLuong}</b>
                    <button className="btn btn-success"
                        onClick={() => { this.props.handleChangeQuantity(id, true) }}
                    >+</button>
                </td>
                <td className='align-middle'>{item.calSubtotal().toLocaleString()}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className='col-12'>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
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
