import { USER_HISTORY_REQUEST } from '../constants/historyConstants'
export const historyReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_HISTORY_REQUEST:
      return {
        ...state,
        history: action.payload,
      }
    default:
      return state
  }
}
