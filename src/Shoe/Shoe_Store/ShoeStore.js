import React, { Component } from 'react'
import ProductList from './ProductList'
import ModalDetail from './ModalDetail'
import ProductCart from './ProductCart'
import { PAGE_HOME, shoeArr } from "./data";
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ShoeStore extends Component {

    render() {
        return (
            <>
                <Header />
                <div className='container mb-5'>
                    <div className="row">
                        {this.props.page == PAGE_HOME
                            ? <ProductList />
                            : <ProductCart />
                        }
                    </div>
                </div>
                <ModalDetail />
                <ToastContainer />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.shoeReducer.page,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ShoeStore)
