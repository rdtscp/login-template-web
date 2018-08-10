import { combineReducers }                            from 'redux'

import authReducer                                    from './authReducer';

import { IStateType } from '../Store/Types';

export const rootReducer = combineReducers<IStateType>({
  authState: authReducer,
});