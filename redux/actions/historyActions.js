import axios from 'axios'
import { USER_HISTORY_REQUEST } from '../constants/historyConstants'
export const historyActions = (jwt) => async (dispatch) => {
  const getJwt = await jwt
  //   console.log(getJwt)
  const historyData = await axios.get(
    'https://pacific-taiga-53059.herokuapp.com/api/player-logs',
    {
      headers: {
        Authorization: getJwt,
      },
    }
  )
  dispatch({
    type: USER_HISTORY_REQUEST,
    payload: historyData.data,
  })
}
