/* lib */
import { push } from 'connected-react-router'
import { setAuth } from 'containers/App/actions'
import { LOGOUT } from 'containers/App/constants'
import { put, takeLatest } from 'redux-saga/effects'
import auth from 'utils/auth'

export function* logout() {
  auth.logout()
  yield put(setAuth([false]))
  yield put(push('/login'))
}

// Watchers
export default function* userLogout() {
  yield takeLatest(LOGOUT, logout)
}
