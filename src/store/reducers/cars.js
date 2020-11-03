import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cars: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.FETCH_CARS_START) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === actionTypes.FETCH_CARS_SUCCESS) {
    return {
      ...state,
      cars: action.cars,
      error: null,
      loading: false,
    };
  }
  if (action.type === actionTypes.FETCH_CARS_FAIL) {
    return {
      ...state,
      error: action.error,
      loading: false,
    };
  }
  return state;
};

export default reducer;
