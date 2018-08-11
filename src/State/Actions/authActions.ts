import { Dispatch }                                   from 'redux';

/* Types */
import { SET_AUTH }                                   from './actionTypes';

const setAuthState = (authStatus: boolean, authToken: string) => ((dispatch: Dispatch) => {
  dispatch({
    payload: {
      authStatus,
      authToken,
    },
    type: SET_AUTH
  })
});

export { setAuthState };