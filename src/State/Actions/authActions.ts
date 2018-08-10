import { Dispatch }                                   from 'redux';

import axios                                          from 'axios';
import network                                        from '../../Resources/networkHelper';

/* Types */
import { LOGIN_REQUEST, TOKEN_CHECK }                 from './actionTypes';
import { ILoginRegisterInput }                        from './Types';

const checkAuthTokenAction = (authToken: string) => ((dispatch: Dispatch ) => {
  network.isAuthorised(authToken, (authStatus: boolean) => {
    dispatch({
      payload: {
        authStatus,
        authToken,
      },
      type: TOKEN_CHECK
    })
  });
});



const loginAction = (loginData: ILoginRegisterInput) => ((dispatch: Dispatch) => {
  network.getCSRF((csrfToken) => {
    axios.request({
      data: {
        _csrf: csrfToken,
        password: loginData.password,
        username: loginData.username,
      },
      method: 'POST',
      url: 'http://localhost:1337/device/create',
      withCredentials: true,
    })
    .then((response) => {
      // If this responded properly.
      if (response.data.error || response.data.warning) {
        dispatch({
          payload: {
            authStatus: false,
            authToken: '',
          },
          type: LOGIN_REQUEST,
        });
      }
      else if (response.data.content.authToken) {
        localStorage.setItem('authToken', response.data.content.authToken);
        dispatch({
          payload: {
            authStatus: true,
            authToken: response.data.content.authToken,
          },
          type: LOGIN_REQUEST,
        });
      }
      else {
        dispatch({
          payload: {
            authStatus: false,
            authToken: '',
          },
          type: LOGIN_REQUEST,
        });
      }
    });
  });
});

// const registerAction = (registerData: ILoginRegisterInput) => ((dispatch: any) => {

// });

export { loginAction, checkAuthTokenAction };