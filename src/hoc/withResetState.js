// Takes the action type for resetting state and the state to reset to
// eslint-disable-next-line import/prefer-default-export
export const withResetState = (resetStateActionType, initialState) =>
  // Returns a higher order reducer that takes a baseReducer
  (baseReducer) =>
    // returns a new reducer function
    (state, action) => {
      // Is the given action of type resetStateActionType?
      const newState =
        action.type === resetStateActionType
          ? { ...initialState } // if yes, return initial state
          : state // if not, return given state

      // give newState and the action to the base reducer
      return baseReducer(newState, action)
    }
