import axios from 'axios';

interface IBackendResponse {
  error: boolean;
  warning: boolean;
  content: any;
}

const network = {

    /* @TODO: Checks if the local authentication token is valid. */
    isAuthorised(authToken: string, cb: (authStatus: boolean) => void) {
      this.getCSRF((csrfToken) => {
        return (
          axios.request<IBackendResponse>({
            data: {
              _csrf:      csrfToken,
              authToken
            },
            method: 'POST',
            url: 'http://localhost:1337/device/get',
            withCredentials: true,
          })
          .then((response) => {
            cb(response.data.content.tokenValid);
          })
        );
      });
    },

    // Gets a CSRF token from API, and returns it in a callback.
    getCSRF(cb: (csrfToken: string) => void) {
      return (
        axios.request({
          method:'GET',
          url:'http://localhost:1337/csrfToken',
          withCredentials: true,
        })
        .then((response) => {
          return cb(response.data._csrf);
        })
      );
    },

}

export default network;