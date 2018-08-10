import { LOGIN_REQUEST, REGISTER_REQUEST, TOKEN_CHECK } from '../Actions/actionTypes';

const initialState = {
  authStatus: false,
  authToken: '',
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOKEN_CHECK:
      return {
        ...state,
        ...action.payload
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload
      };
    case REGISTER_REQUEST:
      return state;
    default:
      return state;
  }
}

export default authReducer;