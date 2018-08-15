/* Import Redux Libraries */
import { applyMiddleware, createStore }               from 'redux';
import { composeWithDevTools }                        from 'redux-devtools-extension/developmentOnly';
import thunk                                          from 'redux-thunk';
import { rootReducer }                                from 'src/State/Reducers';

/* Import Types */
import { IStateType }                                 from './Types';

export const initStore = (initialState: IStateType) => {
  const middlewares = [thunk];
  const enhancer    = composeWithDevTools(
    applyMiddleware(...middlewares),
  );
  return createStore(rootReducer, initialState, enhancer);
}