import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/',
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.AUTH_START) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === actionTypes.AUTH_SUCCESS) {
    return {
      ...state,
      token: action.token,
      userId: action.userId,
      error: null,
      loading: false,
    };
  }
  if (action.type === actionTypes.AUTH_FAIL) {
    return {
      ...state,
      error: action.error,
      loading: false,
    };
  }
  if (action.type === actionTypes.AUTH_FAIL_DISMISS_ALERT) {
    return {
      ...state,
      error: null,
    };
  }
  if (action.type === actionTypes.AUTH_LOGOUT) {
    return {
      ...state,
      token: null,
      userId: null,
    };
  }
  if (action.type === actionTypes.SET_AUTH_REDIRECT_PATH) {
    return {
      ...state,
      authRedirectPath: action.path,
    };
  }
  return state;
};

export default reducer;
