import { LOGIN_REQUEST } from '../constants/loginConstants'

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      }
    default:
      return state
  }
}
