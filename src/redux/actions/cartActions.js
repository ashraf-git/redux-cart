const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const addToCart = id => {
    return{type: ADD_TO_CART, id}
}
const removeFromCart = id => {
    return{type: REMOVE_FROM_CART, id}
}