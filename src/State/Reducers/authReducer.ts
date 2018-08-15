import { Reducer }                                    from 'redux';

import { SET_AUTH }                                   from 'src/State/Actions/actionTypes';
import { IAuthStateType }                              from 'src/State/Store/Types';

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