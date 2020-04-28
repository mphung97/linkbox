/**
 * The global state selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectLogin = (state) => {
  return state.login || initialState
}

const makeSelectFormState = () =>
  createSelector(selectLogin, (loginState) => ({
    username: loginState.username,
    password: loginState.password,
  }))

const makeSelectSending = () =>
  createSelector(selectLogin, (loginState) => loginState.sending)

export { selectLogin, makeSelectFormState, makeSelectSending }
