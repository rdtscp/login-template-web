/* Types */
import { Dispatch }                                   from 'redux';
import { UserAPI, UserReponseData }                   from '../../Models';
import { SET_CURR_USER }                              from './actionTypes';

const setCurrentUserAction = (authToken: string) => ((dispatch: Dispatch) => {
    UserAPI.get(authToken)
    .then((data: UserReponseData) => {
      // Received User Model.
      return dispatch({
        payload: data.content,
        type: SET_CURR_USER
      });
    })
    .catch((data: UserReponseData) => {
      // Did not receive User Model.
      return dispatch({
        payload: undefined,
        type: SET_CURR_USER
      });
    })
});

export { setCurrentUserAction };