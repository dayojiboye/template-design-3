import * as actionTypes from './actionTypes';

export const addToCart = (name, image, price) => {
  return {
    type: actionTypes.ADD_TO_CART,
    name: name,
    image: image,
    price: price,
  };
};

export const removeFromCart = (id, price) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    id: id,
    price: price,
  };
};

export const clearCart = () => {
  localStorage.removeItem('cart');
  localStorage.removeItem('total');
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const clear = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(clearCart());
    }, 1000);
  };
};

export const checkoutInit = () => {
  return {
    type: actionTypes.CHECKOUT_INIT,
  };
};

export const checkoutStart = () => {
  return {
    type: actionTypes.CHECKOUT_START,
  };
};
