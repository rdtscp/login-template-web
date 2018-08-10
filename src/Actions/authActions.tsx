import axios                                          from 'axios';
import network                                        from '../Resources/networkHelper';

import { LOGIN_REQUEST }                              from './actionTypes';

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
        if (response.data.content.authToken) {
          dispatch({
            authToken: response.data.content.authToken,
            authorised: true,
          });
        }
        else {
          dispatch({
            actionType: LOGIN_REQUEST,
            payload: {
              authToken: '',
              authorised: false,
            },
          });
        }
      });
    });
});

export { loginAction };