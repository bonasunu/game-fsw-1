import { LEADERBOARD_ACCESS } from '../constants/userConstants'

const leaderboardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LEADERBOARD_ACCESS':
      return { ...state, leader: action.payload }
    default:
      return state
  }
}

export default leaderboardReducer
