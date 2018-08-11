import network from '../Resources/networkHelper';

const checkAuthToken = (callback: (authStatus: boolean, authToken: string) => void) => {
  const localAuthToken = localStorage.getItem('authToken');
  if (localAuthToken === null) {
    return callback(false, '');
  }
  else {
    network.isAuthorised(localAuthToken, (authStatus: boolean) => {
      return callback(authStatus, localAuthToken);
    });
  }
}

export { checkAuthToken };