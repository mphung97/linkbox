/**
 * The global state selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobal = (state) => state.global || initialState

const selectRouter = (state) => state.router

const selectCurrentUser = createSelector(
  selectGlobal,
  (globalState) => globalState.username
)

const selectLoggedIn = createSelector(
  selectGlobal,
  (globalState) => globalState.loggedIn
)

const selectLoading = createSelector(
  selectGlobal,
  (globalState) => globalState.loading
)

const selectError = createSelector(
  selectGlobal,
  (globalState) => globalState.error
)

const selectLocation = () =>
  createSelector(selectRouter, (routerState) => routerState.location)

export {
  selectGlobal,
  selectCurrentUser,
  selectLoggedIn,
  selectLoading,
  selectError,
  selectLocation,
}
