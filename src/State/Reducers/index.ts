import { combineReducers }                            from 'redux'

import authReducer                                    from './authReducer';
import userReducer                                    from './userReducer';

import { IStateType } from '../Store/Types';

export const rootReducer = combineReducers<IStateType>({
  authState: authReducer,
  currentUser: userReducer,
});