import axios from 'axios';

const network = {

    /* @TODO: Checks if the local authentication token is valid. */
    isAuthorised: function(authToken, cb) {
        this.getCSRF((csrfToken) => {
          return (
            axios({
              method: 'POST',
              url: 'http://localhost:1337/device/get',
              data: {
                _csrf: csrfToken,
                authToken: authToken
              },
              withCredentials: true,
              contentType: 'json',
              })
              .then((response) => {
                if (response.data.content.tokenValid) {
                  cb(true);
                }
                else {
                  cb(false);
                }
              })
            );
        });
    },

    // Gets a CSRF token from API, and returns it in a callback.
    getCSRF: function(cb) {
        return (
            axios({
                method:'GET',
                url:'http://localhost:1337/csrfToken',
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                return cb(response.data._csrf);
            })
        );
    },

}

export default network;