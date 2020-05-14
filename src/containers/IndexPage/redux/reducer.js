import produce from 'immer'
import { SET_LINKS } from './actions'

export const initialState = {
  links: [],
}

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LINKS:
        draft.links.push(...action.payload)
        break
    }
  })

export default reducer
