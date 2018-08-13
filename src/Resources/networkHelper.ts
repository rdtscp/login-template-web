import axios                                          from 'axios';

const network = {

    /* @TODO: Checks if the local authentication token is valid. */
    isAuthorised(authToken: string, cb: (authStatus: boolean) => void) {
      this.getCSRF((csrfToken) => {
        return (
          axios.request({
            data: {
              _csrf:      csrfToken,
              authToken
            },
            method: 'POST',
            url: process.env.REACT_APP_API_URL + '/device/get',
            withCredentials: true,
          })
          .then((response) => {
            return cb(response.data.content.tokenValid);
          })
        );
      });
    },

    // Gets a CSRF token from API, and returns it in a callback.
    getCSRF(cb: (csrfToken: string) => void) {
      return (
        axios.request({
          method:'GET',
          url:process.env.REACT_APP_API_URL + '/csrfToken',
          withCredentials: true,
        })
        .then((response) => {
          return cb(response.data._csrf);
        })
      );
    },

}

export default network;