import { SET_AUTH } from '../Actions/actionTypes';

import { Reducer  } from 'redux';

import { AuthStateType } from '../Store/Types';

const initialState = {
    authStatus: false,
    authToken: '',
} as AuthStateType;

const authReducer: Reducer<AuthStateType> = (state: AuthStateType = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default authReducer;