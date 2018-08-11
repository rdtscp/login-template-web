import { IStateType }                                         from './Types';

import { initStore } from './Store';

import { Store } from 'redux';

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