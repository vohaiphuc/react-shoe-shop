import React, { Component } from 'react'
import ProductList from './ProductList'
import ModalDetail from './ModalDetail'
import ProductCart from './ProductCart'
import { shoeArr } from "./data";
import Header from './Header';

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
                <Header changePage={this.changePage} />
                <div className='container mb-5'>
                    <div className="row">
                        {this.state.page == "home"
                            ? <ProductList list={shoeArr} handleAddToCart={this.handleAddToCart} handleViewDetail={this.handleViewDetail} />
                            : <ProductCart cart={this.state.cart} handleChangeQuantity={this.handleChangeQuantity} handleRemove={this.handleRemove} />
                        }
                    </div>
                </div>
                <ModalDetail viewingItem={this.state.viewingItem} handleAddToCart={this.handleAddToCart} />
            </>
        )
    }
}