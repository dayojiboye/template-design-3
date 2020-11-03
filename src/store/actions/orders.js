import * as actionTypes from './actionTypes';
import axios from '../../components/axios/axios';

export const purchaseStart = () => {
  return {
    type: actionTypes.PURCHASE_START,
  };
};

export const purchaseSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_SUCCESS,
    id: id,
    orderData: orderData,
  };
};

export const puchaseFail = (error) => {
  return {
    type: actionTypes.PURCHASE_FAIL,
    error: error,
  };
};

export const purchase = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseStart());
    axios
      .post('/orders.json?auth=' + token, orderData)
      .then((response) => {
        dispatch(purchaseSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(puchaseFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

// Fetching orders

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const queryParams =
      '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get('/orders.json' + queryParams)
      .then((response) => {
        let orders = [];
        for (let keys in response.data) {
          for (let order of response.data[keys].orders) {
            orders.push({
              id: order.id,
              car: order.name,
              price: order.price,
              date: response.data[keys].date,
            });
          }
        }
        dispatch(fetchOrdersSuccess(orders));
        // console.log(orders);
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchOrdersFail(error));
      });
  };
};
