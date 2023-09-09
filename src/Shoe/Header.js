import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { PAGE_CART, PAGE_HOME } from './data'

export class Header extends Component {
    setActivePageClass = (page) => {
        console.log(this.props.activePage);
        return this.props.activePage == page ? "nav-item active" : "nav-item"
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="../../../public/index.html" >Shoe Shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={this.setActivePageClass(PAGE_HOME)} >
                            <a className="nav-link" href="#" onClick={() => { this.props.handleChangePage(PAGE_HOME) }}><i class="fa fa-home mr-2"></i>Home</a>
                        </li>
                        <li className={this.setActivePageClass(PAGE_CART)} >
                            <a className="nav-link" href="#" onClick={() => { this.props.handleChangePage(PAGE_CART) }}><i class="fa fa-shopping-cart mr-2"></i>Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("🚀 ~ file: Header.js:34 ~ mapStateToProps ~ state:", state)
    return {
        activePage: state.shoeReducer.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage: (page) => {
            let action = {
                type: "CHANGE_PAGE",
                payload: page
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
