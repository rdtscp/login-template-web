import * as Models                                    from 'src/Models';

/* Overall State */

export interface IStateType {
  readonly authState:   IIAuthStateType;
  readonly currentUser: Models.User;
}

/* Non Model Types */

export interface IIAuthStateType {
  readonly authStatus: boolean;
  readonly authToken:  string;
}