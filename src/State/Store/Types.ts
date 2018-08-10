export interface IAuthStateType {
  readonly authStatus: boolean;
  readonly authToken:  string;
}

export interface IStateType {
  readonly authState: IAuthStateType;
}
