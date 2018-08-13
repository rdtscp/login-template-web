import { Store }                                      from 'redux';

import { initStore }                                  from './Store';
import { IStateType }                                 from './Types';

const intitialStore: IStateType = {
  authState: {
    authStatus: false,
    authToken:  '',
  },
  currentUser: {
    createdAt:  0,
    devices:    [],
    id:         '',
    updatedAt:  0,
    username:   ''
  }
};

const store: Store<IStateType> = initStore(intitialStore);

export default store;