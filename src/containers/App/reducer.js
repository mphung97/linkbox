/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer'
import auth from 'utils/auth'

import { LOAD, LOAD_SUCCESS, LOAD_ERROR, SET_AUTH } from './actions'

// The initial state of the App
export const initialState = {
  username: '',
  loggedIn: auth.loggedIn(),
  loading: false,
  error: false,
  errorMessage: '',
}

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD:
        draft.loading = true
        draft.error = false
        break

      case LOAD_SUCCESS:
        draft.loading = false
        break

      case LOAD_ERROR:
        draft.error = action.error
        break
      case SET_AUTH:
        draft.loggedIn = action.newState
        break
    }
  })

export default appReducer
