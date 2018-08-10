import { combineReducers }                            from 'redux'

import authReducer                                    from './authReducer';

import { IStateType } from '../Store/types';

export const rootReducer = combineReducers<IStateType>({
  authState: authReducer,
});