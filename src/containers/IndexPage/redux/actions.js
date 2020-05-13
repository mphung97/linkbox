export const GET_LINKS = 'GET_LINKS'
export const SET_LINKS = 'SET_LINKS'

export function setLinks(payload) {
  return {
    type: SET_LINKS,
    payload,
  }
}

export function getLinks() {
  return {
    type: GET_LINKS,
  }
}
