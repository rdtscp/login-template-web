import * as Models                                    from 'src/Models';

/* Overall State */

export interface IStateType {
  readonly authState:   IAuthStateType;
  readonly currentUser: Models.User;
}

/* Non Model Types */

export interface IAuthStateType {
  readonly authStatus: boolean;
  readonly authToken:  string;
}