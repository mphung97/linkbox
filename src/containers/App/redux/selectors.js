/**
 * The global state selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobal = (state) => state.global || initialState

const selectRouter = (state) => state.router

const selectCurrentUser = createSelector(
  selectGlobal,
  ({ email, username }) => ({
    email,
    username,
  })
)

const selectLoggedIn = createSelector(selectGlobal, ({ loggedIn }) => loggedIn)

const selectLoading = createSelector(selectGlobal, ({ loading }) => loading)

const selectError = createSelector(selectGlobal, ({ error }) => error)

const selectLocation = createSelector(selectRouter, ({ location }) => location)

export {
  selectGlobal,
  selectCurrentUser,
  selectLoggedIn,
  selectLoading,
  selectError,
  selectLocation,
}
