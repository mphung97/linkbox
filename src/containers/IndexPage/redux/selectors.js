import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectIndex = ({ index }) => index || initialState

const selectLinks = createSelector(selectIndex, ({ links }) => links)

const selectLoading = createSelector(selectIndex, ({ loading }) => loading)

export { selectLinks, selectLoading }
