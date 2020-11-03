import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  error: null,
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.PURCHASE_START) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === actionTypes.PURCHASE_SUCCESS) {
    const newOrder = {
      ...action.orderData,
      id: action.id,
    };
    return {
      ...state,
      loading: false,
      orders: state.orders.concat(newOrder),
      purchased: true,
    };
  }
  if (action.type === actionTypes.PURCHASE_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === actionTypes.PURCHASE_INIT) {
    return {
      ...state,
      purchased: false,
    };
  }
  if (action.type === actionTypes.FETCH_ORDERS_START) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === actionTypes.FETCH_ORDERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      orders: action.orders,
    };
  }
  if (action.type === actionTypes.FETCH_ORDERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  return state;
};

export default reducer;
