import axios, { AxiosResponse }                       from 'axios';
import network                                        from '../Resources/networkHelper';

interface IDeviceType {
  readonly createdAt:   number;
  readonly updatedAt:   number;
  readonly id:          string;
  readonly lastUsed:    number;
  readonly authToken:   string;
  readonly ip:          string;
  readonly userAgent:   string;
  readonly owner:       string;
}

export type Device = IDeviceType;

/* API Types */

interface IDeviceResponseData {
  error:    boolean;
  warning:  boolean;
  message:  string;
  content:  { authStatus: boolean; authToken: string } |
            { tokenValid: boolean } |
            null;
}

export type DeviceResponseData = IDeviceResponseData;

/* API */

// const headers = {
//   'Access-Control-Allow-Credentials': 'true',
//   'Content-Type': 'application/json',
// };

export const DeviceAPI = {

  get(authToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.post('http://login-template-web.herokuapp.com' + '/device/get', {
          _csrf: csrf,
          authToken,
        },{
          withCredentials: true,
        })
        .then((response: AxiosResponse) => {
          const data: DeviceResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        });
      });
    });
  },

  create(authToken: string, username: string, password: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.post('http://login-template-web.herokuapp.com' + '/device/create', {
          _csrf: csrf,
          authToken,
          password,
          username,
        },{
          withCredentials: true,
        })
        .then((response: AxiosResponse) => {
          const data: DeviceResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        });
      });
    });
  },

  destroy(authToken: string, deviceID: string, deviceAuthToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.post('http://login-template-web.herokuapp.com' + '/device/destroy', {
          _csrf: csrf,
          authToken,
          deviceAuthToken,
            deviceID,
        },{
          withCredentials: true,
        })
        .then((response: AxiosResponse) => {
          const data: DeviceResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        });
      });
    });
  },

}