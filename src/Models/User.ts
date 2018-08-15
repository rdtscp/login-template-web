import axios, { AxiosResponse }                       from 'axios';
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

interface IUserResponseData {
  error:    boolean;
  warning:  boolean;
  message:  string;
  content:  User | null;
}

export type UserResponseData = IUserResponseData;

/* API */

// const headers = {
//   'Access-Control-Allow-Credentials': 'true',
//   'Content-Type': 'application/json',
// };

export const UserAPI = {

  get(authToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.post('https://login-template-web.herokuapp.com/user/get', {
          _csrf: csrf,
          authToken,
        },{
          withCredentials: true,
        })
        .then((response: AxiosResponse) => {
          const data: UserResponseData = response.data;
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
        axios.post('https://login-template-web.herokuapp.com/user/create', {
          _csrf: csrf,
          authToken,
          password,
          username,
        },{
          withCredentials: true,
        })
        .then((response: AxiosResponse) => {
          const data: UserResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        });
      });
    });
  },

  update(authToken: string) {
    return '@TODO';
  },

  destroy(authToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        axios.post('https://login-template-web.herokuapp.com/user/destroy', {
          _csrf: csrf,
          authToken,
        },{
          withCredentials: true,
        })
        .then((response: AxiosResponse) => {
          const data: UserResponseData = response.data;
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        });
      });
    });
  },

}