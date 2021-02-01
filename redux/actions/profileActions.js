import axios from 'axios'
import {
  USER_PROFILE_REQUEST,
  USER_HISTORY_REQUEST,
  USER_EDIT_REQUEST,
} from '../constants/profileConstants'
import Router from 'next/router'

export const profileActions = (jwt) => async (dispatch) => {
  // const getJwt = await jwt
  //   console.log(getJwt)
  const profileData = await axios.get(
    'https://pacific-taiga-53059.herokuapp.com/whoami',
    {
      headers: {
        Authorization: jwt,
      },
    }
  )
  dispatch({
    type: USER_PROFILE_REQUEST,
    payload: profileData.data,
  })
}
