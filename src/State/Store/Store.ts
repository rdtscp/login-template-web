/* Import Redux Libraries */
import { applyMiddleware, compose, createStore }              from 'redux';
import thunk                                                  from 'redux-thunk';
import { rootReducer }                                        from '../Reducers';

/* Import Types */
import { IStateType }                                         from './Types';

export const initStore = (initialState: IStateType) => {
  const middlewares = [thunk];
  const enhancer    = compose(
    applyMiddleware(...middlewares),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__   &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return createStore(rootReducer, initialState, enhancer);
}