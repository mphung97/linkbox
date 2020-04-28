/* lib */
import { LOCATION_CHANGE, push } from 'connected-react-router'
import { call, cancel, put, race, select, take, takeLatest } from 'redux-saga/effects'

import auth from 'utils/auth'
import { load, loaded, loadingError, setAuthState } from 'containers/App/actions'
import { LOGIN, LOGOUT } from './actions'
import { makeSelectFormState } from './selectors'

export function* authorize({ newUser, username, password }) {
  yield put(load(true))
  try {
    let response

    if (newUser) {
      response = yield call(auth.signup, username, password)
    } else {
      response = yield call(auth.login, username, password)
    }

    return response
  } catch (error) {
    yield put(loadingError(error.response?.data?.message))
    return false
  } finally {
    yield put(loaded())
  }
}

export function* login() {
  const { username, password } = yield select(makeSelectFormState())
  const newUser = false

  const winner = yield race({
    auth: call(authorize, { newUser, username, password }),
    logout: take(LOGOUT),
  })

  if (winner.auth) {
    yield put(setAuthState(true))
    yield put(push('/'))
  }
}

// Watchers
export default function* userLogin() {
  const watcher = yield takeLatest(LOGIN, login)
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}
