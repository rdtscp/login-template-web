const network = {

    /* @TODO: Checks if the local authentication token is valid. */
    isAuthorised(authToken: string, cb: (authStatus: boolean) => void) {
      this.getCSRF((csrfToken) => {
        return (
          fetch(process.env.REACT_APP_API_URL + '/device/destroy', {
            body: JSON.stringify({
              _csrf:    csrfToken,
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
          .then((data) => {
            return cb(data.content.tokenValid);
          })
          .catch((error) => {
            return cb(false);
          })
        );
      });
    },

    // Gets a CSRF token from API, and returns it in a callback.
    getCSRF(cb: (csrfToken: string) => void) {
      return (
        fetch(process.env.REACT_APP_API_URL + '/csrfToken', {
          credentials: "include",
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'GET',
          mode: "cors"
        })
        .then((response) => response.json())
        .then((data) => {
          return cb(data._csrf);
        })
        .catch((error) => {
          return cb('');
        })
      );
    },

}

export default network;