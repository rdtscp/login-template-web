// import CssBaseline                                    from '@material-ui/core/CssBaseline';
import { applyMiddleware, compose, createStore }      from 'redux';
import thunk                                          from 'redux-thunk';
import rootReducer                                    from '../Reducers';

const initialState: any = {
  authState: {
    authStatus: false,
    authToken: '',
  }
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

export default store;