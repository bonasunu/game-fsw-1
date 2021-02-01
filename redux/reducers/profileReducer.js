import {
  USER_PROFILE_REQUEST,
  USER_HISTORY_REQUEST,
  USER_EDIT_REQUEST,
} from '../constants/profileConstants'

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        profile: action.payload,
      }
    default:
      return state
  }
}
