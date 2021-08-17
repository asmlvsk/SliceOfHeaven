import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart-reducer";
import Cart from "./Cart";

class CartContainer extends React.Component{

    render(){
        return<Cart />
    }
}

const mapStateToProps = (state) =>({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, {addToCart})(CartContainer);