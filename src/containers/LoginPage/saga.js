/* lib */
import { push } from 'connected-react-router'
import { load, loadError, loadSuccess, setAuth } from 'containers/App/actions'
import { LOGIN, LOGOUT } from 'containers/App/constants'
import { call, put, race, take, takeEvery } from 'redux-saga/effects'
import auth from 'utils/auth'

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
    yield put(loadError(error.response?.data?.message))
    return false
  } finally {
    yield put(loadSuccess())
  }
}

export function* login(action) {
  const { username, password } = action
  const newUser = false

  const winner = yield race({
    auth: call(authorize, { newUser, username, password }),
    logout: take(LOGOUT),
  })
  if (winner.auth) {
    yield put(setAuth(true))
    yield put(push('/'))
  }
}

// Watchers
export default function* userLogin() {
  yield takeEvery(LOGIN, login)
}
