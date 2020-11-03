import * as actionTypes from './actionTypes';
import axios from '../../components/axios/axios';

export const fetchCarsStart = () => {
  return {
    type: actionTypes.FETCH_CARS_START,
  };
};

export const fetchCarsSuccess = (cars) => {
  return {
    type: actionTypes.FETCH_CARS_SUCCESS,
    cars: cars,
  };
};

export const fetchCarsFail = (error) => {
  return {
    type: actionTypes.FETCH_CARS_FAIL,
    error: error,
  };
};

export const fetchCars = () => {
  return (dispatch) => {
    dispatch(fetchCarsStart());
    axios
      .get('/cars.json')
      .then((response) => {
        dispatch(fetchCarsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCarsFail(error));
        console.log(error);
      });
  };
};
