import React, { Component } from 'react'
import ProductList from './ProductList'
import ModalDetail from './ModalDetail'
import ProductCart from './ProductCart'
import { shoeArr } from "./data";

export default class ShoeStore extends Component {
    state = {
        page: "home",
        cart: [],
        viewingItem: {}
    }
    changePage = (toPage) => {
        this.setState({
            page: toPage
        })
    }
    handleAddToCart = (shoe) => {
        let cloneCart = [...this.state.cart]

        let index = cloneCart.findIndex((item) => { return item.id === shoe.id })
        if (index < 0) {
            cloneCart.push({ ...shoe, soLuong: 1 })
        } else {
            cloneCart[index].soLuong++
        }
        this.setState({
            cart: cloneCart
        })
    }
    handleChangeQuantity = (id, option) => {
        let cloneCart = [...this.state.cart]

        let index = cloneCart.findIndex((item) => { return item.id === id })
        if (index < 0) {
            console.log(`Không tìm thấy id này: ${id}`);
        } else {
            option ? cloneCart[index].soLuong++ : cloneCart[index].soLuong--
            cloneCart[index].soLuong < 1 && cloneCart.splice(index, 1)
        }
        this.setState({
            cart: cloneCart
        })
    }
    handleRemove = (id) => {
        let cloneCart = [...this.state.cart]

        let index = cloneCart.findIndex((item) => { return item.id === id })
        if (index < 0) {
            console.log(`Không tìm thấy id này: ${id}`);
        } else {
            cloneCart.splice(index, 1)
        }
        this.setState({
            cart: cloneCart
        })
    }
    handleViewDetail = (item) => {
        this.setState({
            viewingItem: item
        })
    }
    render() {
        return (
            <>
                <div className="col-12 my-5">
                    <button className='btn btn-warning mr-5' onClick={() => { this.changePage("home") }}>List</button>
                    <button className='btn btn-warning' onClick={() => { this.changePage("cart") }}>Cart</button>
                    {/* <button type="button" className="btn btn-primary ml-5" data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                    </button> */}
                </div>

                <ModalDetail viewingItem={this.state.viewingItem} handleAddToCart={this.handleAddToCart} />
                {this.state.page == "home"
                    ? <ProductList list={shoeArr} handleAddToCart={this.handleAddToCart} handleViewDetail={this.handleViewDetail} />
                    : <ProductCart cart={this.state.cart} handleChangeQuantity={this.handleChangeQuantity} handleRemove={this.handleRemove} />
                }
            </>
        )
    }
}