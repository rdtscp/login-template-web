import axios                                          from 'axios';

import network                                        from '../Resources/networkHelper';
import { Device }                                     from './Device';

interface IUserType {
  readonly devices:   Device[];
  readonly createdAt: number;
  readonly updatedAt: number;
  readonly id:        string;
  readonly username:  string;
}

export type User = IUserType;

/* API Types */

interface IBackendResponse {
  data: IUserResponseData;
}

interface IUserResponseData {
  error:    boolean;
  warning:  boolean;
  message:  string;
  content:  User | null;
}

export type UserReponseData = IUserResponseData;

/* API */

export const UserAPI = {

  get(authToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.request({
          data: {
            _csrf:    csrf,
            authToken
          },
          method: 'POST',
          url: process.env.REACT_APP_API_URL + '/user/get',
          withCredentials: true,
        })
        .then((response: IBackendResponse) => {
          const data: IUserResponseData = response.data;
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
          method: 'POST',
          url: process.env.REACT_APP_API_URL + '/user/create',
          withCredentials: true,
        })
        .then((response: IBackendResponse) => {
          const data: IUserResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        })
      });
    });
  },

  update(authToken: string) {
    return '@TODO';
  },

  destroy(authToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.request({
          data: {
            _csrf:    csrf,
            authToken
          },
          method: 'POST',
          url: process.env.REACT_APP_API_URL + '/user/destroy',
          withCredentials: true,
        })
        .then((response: IBackendResponse) => {
          const data: IUserResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        })
      });
    });
  },

}