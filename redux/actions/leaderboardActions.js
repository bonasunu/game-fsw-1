import axios from 'axios'
import { LEADERBOARD_ACCESS } from '../constants/leaderboardConstant'

export const loadLeaderBoard = () => async (dispatch) => {
  const leaderboard = await axios.get(
    'https://pacific-taiga-53059.herokuapp.com/api/leaderboard'
  )
  dispatch({
    type: 'LEADERBOARD_ACCESS',
    payload: leaderboard.data,
  })
}
