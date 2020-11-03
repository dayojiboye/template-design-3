import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  totalPrice: parseInt(localStorage.getItem('total')) || 0,
  checkout: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.ADD_TO_CART) {
    return {
      ...state,
      cart: state.cart.concat({
        name: action.name,
        image: action.image,
        price: action.price,
        id: new Date(),
      }),
      totalPrice: state.totalPrice + action.price,
    };
  }
  if (action.type === actionTypes.REMOVE_FROM_CART) {
    let filteredCart = state.cart.filter((cart) => {
      return cart.id !== action.id;
    });
    return {
      ...state,
      cart: filteredCart,
      totalPrice: state.totalPrice - action.price,
    };
  }
  if (action.type === actionTypes.CLEAR_CART) {
    return {
      ...state,
      cart: [],
      totalPrice: 0,
    };
  }
  if (action.type === actionTypes.CHECKOUT_INIT) {
    return {
      ...state,
      checkout: true,
    };
  }
  if (action.type === actionTypes.CHECKOUT_START) {
    return {
      ...state,
      checkout: false,
    };
  }
  return state;
};

export default reducer;
