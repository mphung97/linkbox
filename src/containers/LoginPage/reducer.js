/*
 * LoginReducer
 */

import produce from 'immer'

import { SENDING_REQUEST, LOGIN } from './actions'

// The initial state of the Login
export const initialState = {
  sending: false,
  username: '',
  password: '',
}

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SENDING_REQUEST:
        draft.sending = action.sending
        break
      case LOGIN:
        draft.username = action.username
        draft.password = action.password
        break
    }
  })

export default loginReducer
