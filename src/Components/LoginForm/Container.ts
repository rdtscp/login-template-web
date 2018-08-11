import axios    from 'axios';
import network  from '../../Resources/networkHelper';

/* Network Request Types */

interface ILoginRegisterInput {
  password: string,
  username: string
}

/* Network Response Types */

interface IBackendResponse {
  data: IBackendData;
}

interface IBackendData {
  error:    boolean;
  warning:  boolean;
  message:  string;
  content:  any | ILoginContent | null;
}

interface ILoginContent {
  authStatus: boolean;
  authToken:  string;
}

/* Functionality */

const checkAuthToken = (callback: (authStatus: boolean, authToken: string) => void) => {
  const localAuthToken = localStorage.getItem('authToken');
  if (localAuthToken === null) {
    return callback(false, '');
  }
  else {
    network.isAuthorised(localAuthToken, (authStatus: boolean) => {
      return callback(authStatus, localAuthToken);
    });
  }
}

const sendLoginRequest = ((loginData: ILoginRegisterInput, callback: (result: IBackendData) => void) => {
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
    .then((response: IBackendResponse) => {
      const res: IBackendData = response.data;
      if (res.content !== null && 'authToken' in res.content) {
        localStorage.setItem('authToken', res.content.authToken);
      }
      callback(res);
    });
  });
});

const sendRegisterRequest = ((registerData: ILoginRegisterInput, callback: (result: IBackendData) => void) => {
  network.getCSRF((csrfToken) => {
    axios.request({
      data: {
        _csrf: csrfToken,
        password: registerData.password,
        username: registerData.username,
      },
      method: 'POST',
      url: 'http://localhost:1337/user/create',
      withCredentials: true,
    })
    .then((response: IBackendResponse) => {
      const res: IBackendData = response.data;
      callback(res);
    });
  });
});

/* Export Types */

export { ILoginRegisterInput, IBackendData, ILoginContent };

/* Export Functionality */

export { checkAuthToken, sendLoginRequest, sendRegisterRequest };