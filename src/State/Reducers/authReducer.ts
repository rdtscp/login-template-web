import { SET_AUTH } from '../Actions/actionTypes';

import { Reducer  } from 'redux';

import { IAuthStateType } from '../Store/Types';

const initialState = {
    authStatus: false,
    authToken: '',
} as IAuthStateType;

const authReducer: Reducer<IAuthStateType> = (state: IAuthStateType = initialState, action: any) => {
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