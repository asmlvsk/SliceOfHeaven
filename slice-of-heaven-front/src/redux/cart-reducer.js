const ADD_TO_CART = "ADD-TO-CART";

let initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) =>{   
    switch(action.type){
        case ADD_TO_CART:{
            return {
                ...state, 
                cartItems: action.cartItems
            }
        }
        default:
            return state;
    }
}

export const addToCart = (el) =>({type: ADD_TO_CART, el})

export default cartReducer;