import {
  USER_EDIT_REQUEST,
  USER_EDIT_UPDATED,
} from '../constants/editprofileConstants'

export const editprofileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EDIT_REQUEST:
      return {
        loading: true
      }
    case USER_EDIT_UPDATED:
      return {
        loading: false, ...state,
        dataUserEdit: action.payload,
      }
    default:
      return state
  }
}
