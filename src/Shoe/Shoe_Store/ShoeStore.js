import React, { Component } from 'react'
import ProductList from './ProductList'
import ModalDetail from './ModalDetail'
import ProductCart from './ProductCart'
import { PAGE_HOME, shoeArr } from "./data";
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ShoeStore extends Component {
    state = {
        page: PAGE_HOME, // default page
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
            let newShoe = {
                ...shoe,
                soLuong: 1
            }
            newShoe.calSubtotal = () => { return newShoe.price * newShoe.soLuong }
            cloneCart.push(newShoe)
        } else {
            cloneCart[index].soLuong++
        }
        this.setState({
            cart: cloneCart
        })
        this.showMessage("Đã thêm vào giỏ hàng")
    }
    handleChangeQuantity = (id, option) => {
        let cloneCart = [...this.state.cart]

        let index = cloneCart.findIndex((item) => { return item.id === id })
        if (index < 0) {
            console.log(`Không tìm thấy id này: ${id}`);
        } else {
            option ? cloneCart[index].soLuong++ : cloneCart[index].soLuong--
            cloneCart[index].soLuong < 1 && cloneCart.splice(index, 1)
            // console.log("🚀 ~ file: ShoeStore.js:44 ~ ShoeStore ~ cloneCart[index]:", cloneCart[index])
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
        this.showMessage("Đã xóa")
    }
    handleViewDetail = (item) => {
        this.setState({
            viewingItem: item
        })
    }
    showMessage = (message) => {
        toast(`🦄 ${message}`, { position: "bottom-right", });
    }
    render() {
        return (
            <>
                <Header changePage={this.changePage} activePage={this.state.page} />
                <div className='container mb-5'>
                    <div className="row">
                        {this.state.page == PAGE_HOME
                            ? <ProductList list={shoeArr} handleAddToCart={this.handleAddToCart} handleViewDetail={this.handleViewDetail} showMessage={this.showMessage} />
                            : <ProductCart cart={this.state.cart} handleChangeQuantity={this.handleChangeQuantity} handleRemove={this.handleRemove} />
                        }
                    </div>
                </div>
                <ModalDetail viewingItem={this.state.viewingItem} handleAddToCart={this.handleAddToCart} />
                <ToastContainer />
            </>
        )
    }
}