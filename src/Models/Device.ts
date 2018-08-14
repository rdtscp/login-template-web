import axios                                          from 'axios';
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

interface IBackendResponse {
  data: IDeviceResponseData;
}

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

export const DeviceAPI = {

  get(authToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.request({
          data: {
            _csrf:    csrf,
            authToken
          },
          method: 'POST',
          url: process.env.REACT_APP_API_URL + '/device/get',
          withCredentials: true,
        })
        .then((response: IBackendResponse) => {
          const data: IDeviceResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        })
      });
    });
  },

  create(authToken: string, username: string, password: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.request({
          data: {
            _csrf:    csrf,
            authToken,
            password,
            username,
          },
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          url: process.env.REACT_APP_API_URL + '/device/create',
          withCredentials: true,
        })
        .then((response: IBackendResponse) => {
          const data: IDeviceResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        })
      });
    });
  },

  destroy(authToken: string, deviceID: string, deviceAuthToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.request({
          data: {
            _csrf:    csrf,
            authToken,
            deviceAuthToken,
            deviceID,
          },
          method: 'POST',
          url: process.env.REACT_APP_API_URL + '/device/destroy',
          withCredentials: true,
        })
        .then((response: IBackendResponse) => {
          const data: IDeviceResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        })
      });
    });
  },

}