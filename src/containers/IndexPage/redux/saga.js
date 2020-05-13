/* lib */
import axios from 'axios'
import { push } from 'connected-react-router'
import { setAuth } from 'containers/App/redux/actions'
import { LOGOUT } from 'containers/App/redux/constants'
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import auth from 'utils/auth'
import { GET_LINKS, setLinks } from './actions'

const storage = window.localStorage

function fetchLinks() {
  return axios
    .get('http://localhost:3001/links', {
      headers: { authorization: storage.getItem('jwt') },
    })
    .then(({ data }) => data)
}

export function* logout() {
  yield fork(auth.logout)
  yield put(setAuth([false]))
  yield put(push('/login'))
}

export function* getLinks() {
  const links = yield call(fetchLinks)
  yield put(setLinks(links))
}

// Watchers
function* watchLogout() {
  yield takeLatest(LOGOUT, logout)
}

function* watchLinks() {
  yield takeLatest(GET_LINKS, getLinks)
}

export default function* saga() {
  yield all([fork(watchLogout), fork(watchLinks)])
}
