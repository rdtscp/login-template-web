import { IStateType }                                         from './Types';

import { initStore } from './Store';

import { Store } from 'redux';

const intitialStore: IStateType = {
  authState: {
    authStatus: false,
    authToken:  '',
  }
};

const store: Store<IStateType> = initStore(intitialStore);

export default store;