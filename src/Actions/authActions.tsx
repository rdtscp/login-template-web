import axios                                          from 'axios';
import network                                        from '../Resources/networkHelper';

import { LOGIN_REQUEST, TOKEN_CHECK }                 from './actionTypes';

const checkAuthTokenAction = (authToken: string) => ((dispatch: any ) => {
  // tslint:disable-next-line:no-console
  console.log('Checking Auth Token');
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

const loginAction = (loginData: any) => ((dispatch: any) => {
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

export { loginAction, checkAuthTokenAction };