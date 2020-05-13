import history from 'utils/history'
import axios from 'axios'
// import Cookies from 'js-cookie'

const storage = window.localStorage

function forwardTo(location) {
  history.push(location)
}

const auth = {
  login(username, password) {
    if (auth.loggedIn()) {
      return Promise.resolve(true)
    }
    return (
      axios
        .post('http://localhost:3001/signin', { email: username, password })
        .then((response) => {
          const {
            data: { access_token: token },
          } = response
          const { email, iss: user } = JSON.parse(atob(token.split('.')[1]))
          storage.setItem('jwt', token)
          storage.setItem('username', email)
          storage.setItem('email', user)
          return { email, user }
        })
        // eslint-disable-next-line no-console
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            throw new Error(message)
          }
        )
    )
  },

  logout() {
    storage.removeItem('jwt')
    storage.removeItem('username')
    storage.removeItem('email')
  },

  loggedIn() {
    return !!storage.getItem('jwt')
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
