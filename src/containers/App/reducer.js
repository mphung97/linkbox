/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import {
  SENDING_REQUEST,
  SET_AUTH,
  LOGIN,
  SIGNUP,
  SET_ERROR_MESSAGE,
  LOGOUT,
  CHANGE_FORM,
} from './actions';

// The initial state of the App
export const initialState = {
  formState: {
    username: '',
    password: '',
  },
  currentlySending: false,
  loggedIn: /*  auth.loggedIn()  */ false,
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SENDING_REQUEST:
        draft.currentlySending = action.sending;
        break;
      case LOGIN:
        draft.formState.username = action.username;
        draft.formState.password = action.password;
        break;
      case SIGNUP:
        draft.formState.username = action.username;
        draft.formState.password = action.password;
        break;
      case SET_AUTH:
        draft.loggedIn = action.newState;
        break;
      case SET_ERROR_MESSAGE:
        draft.errorMessage = action.message;
        break;
      case LOGOUT:
        draft.formState.username = '';
        draft.formState.password = '';
        break;
      case CHANGE_FORM:
        draft.formState.username = action.username;
        draft.formState.password = action.password;
        break;
    }
  });

export default appReducer;
