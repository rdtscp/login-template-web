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

export type UserReponseData = IUserResponseData;

/* API */

const headers = {
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json',
};

export const UserAPI = {

  get(authToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        fetch(process.env.REACT_APP_API_URL + '/device/destroy', {
          body: JSON.stringify({
            _csrf:    csrf,
            authToken,
          }),
          credentials: "include",
          headers,
          method: 'POST',
          mode: "cors"
        })
        .then((response) => response.json())
        .then((data: IUserResponseData) => {
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
        fetch(process.env.REACT_APP_API_URL + '/device/destroy', {
          body: JSON.stringify({
            _csrf:    csrf,
            authToken,
            password,
            username,
          }),
          credentials: "include",
          headers,
          method: 'POST',
          mode: "cors"
        })
        .then((response) => response.json())
        .then((data: IUserResponseData) => {
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
        fetch(process.env.REACT_APP_API_URL + '/device/destroy', {
          body: JSON.stringify({
            _csrf:    csrf,
            authToken,
          }),
          credentials: "include",
          headers,
          method: 'POST',
          mode: "cors"
        })
        .then((response) => response.json())
        .then((data: IUserResponseData) => {
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        });
      });
    });
  },

}