import axios from 'axios'

const storage = window.localStorage
const token = storage.getItem('jwt') || null

async function get() {
  const { data } = await axios.get('http://localhost:3001/links', {
    headers: { authorization: token },
  })
  return data
}

async function add(url) {
  const { data } = await axios.post(
    'http://localhost:3001/links',
    { url },
    {
      headers: { authorization: token },
    }
  )
  return data
}

export default {
  get,
  add,
}
