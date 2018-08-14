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

export const DeviceAPI = {

  get(authToken: string) {
    return new Promise((resolve, reject) => {
      network.getCSRF((csrf: string) => {
        fetch(process.env.REACT_APP_API_URL + '/device/get', {
          body: JSON.stringify({
            _csrf: csrf,
            authToken,
          }),
          credentials: "include",
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          mode: "cors"
        })
        .then((response) => response.json())
        .then((data: IDeviceResponseData) => {
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
        fetch(process.env.REACT_APP_API_URL + '/device/create', {
          body: JSON.stringify({
            _csrf: csrf,
            authToken,
            password,
            username,
          }),
          credentials: "include",
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          mode: "cors"
        })
        .then((response) => response.json())
        .then((data: IDeviceResponseData) => {
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
        fetch(process.env.REACT_APP_API_URL + '/device/destroy', {
          body: JSON.stringify({
            _csrf:    csrf,
            authToken,
            deviceAuthToken,
            deviceID,
          }),
          credentials: "include",
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          mode: "cors"
        })
        .then((response) => response.json())
        .then((data: IDeviceResponseData) => {
          return resolve(data);
        })
        .catch((error) => {
          return reject(error);
        });
      });
    });
  },

}