import history from 'utils/history'
import axios from 'axios'

const { localStorage } = global.window

function forwardTo(location) {
  history.push(location)
}

const auth = {
  login(email, password) {
    if (auth.loggedIn()) {
      return Promise.resolve(true)
    }
    return axios
      .post('http://localhost:3001/signin', { email, password })
      .then((response) => {
        localStorage.token = response.data.access_token
        return Promise.resolve(true)
      })
  },

  logout() {
    return axios.post('/logout')
  },

  loggedIn() {
    return !!localStorage.token
  },

  signup(username, password) {
    // Post a fake request
    return (
      axios
        .post('/signup', { username, password })
        // Log user in after registering
        // json-server does not refresh automatically, so in dev I just reroute to login
        // and add a success message
        .then(() => {
          forwardTo('/login?success')
          // auth.login(username, password); // reroute
        })
    )
  },
  onChange() {},
}

export default auth
