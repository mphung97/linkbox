/* lib */
import { push } from 'connected-react-router'
import { setAuth } from 'containers/App/redux/actions'
import { LOGOUT } from 'containers/App/redux/constants'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import auth from 'utils/auth'
import { ADD_LINKS, GET_LINKS, setLinks } from './actions'
import api from './api'

export function* logout() {
  yield fork(auth.logout)
  yield put(setAuth([false]))
  yield put(push('/login'))
}

export function* getLinks() {
  try {
    const links = yield call(api.get)
    yield put(setLinks(links))
  } catch (error) {
    yield put(logout)
  }
}

export function* addLinks(action) {
  const link = yield call(api.add, action.payload)
  yield put(setLinks([link]))
}

// Watchers
function* watchLogout() {
  yield takeLatest(LOGOUT, logout)
}

function* watchGetLinks() {
  yield takeLatest(GET_LINKS, getLinks)
}

function* watchAddLinks() {
  yield takeLatest(ADD_LINKS, addLinks)
}

export default function* saga() {
  yield all([fork(watchLogout), fork(watchGetLinks), fork(watchAddLinks)])
}
