/*
 * App actions
 */

export const LOAD = 'LOAD'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_ERROR = 'LOAD_ERROR'
export const SET_AUTH = 'SET_AUTH'

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD
 */
export function load() {
  return {
    type: LOAD,
  }
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_SUCCESS passing the repos
 */
export function loaded() {
  return {
    type: LOAD_SUCCESS,
  }
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ERROR passing the error
 */
export function loadingError(error) {
  return {
    type: LOAD_ERROR,
    error,
  }
}

export function setAuthState(newState) {
  return {
    type: SET_AUTH,
    newState,
  }
}
