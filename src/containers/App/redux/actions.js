import {
  LOAD,
  LOAD_ERROR,
  LOAD_SUCCESS,
  LOGIN,
  LOGOUT,
  SET_AUTH,
  SIGNUP,
} from './constants'

export function load() {
  return {
    type: LOAD,
  }
}
export function loadSuccess() {
  return {
    type: LOAD_SUCCESS,
  }
}

export function loadError(error) {
  return {
    type: LOAD_ERROR,
    error,
  }
}

export function setAuth(payload) {
  return {
    type: SET_AUTH,
    payload,
  }
}

export function login(username, password) {
  return {
    type: LOGIN,
    username,
    password,
  }
}

export function signup(username, password) {
  return {
    type: SIGNUP,
    username,
    password,
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}
