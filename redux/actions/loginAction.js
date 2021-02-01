import axios from 'axios'
import { LOGIN_REQUEST } from '../constants/loginConstants'

export const login = (username, password) => async (dispatch) => {
  try {
    const urlTarget = 'https://pacific-taiga-53059.herokuapp.com/login'
    const loginResult = await axios.post(urlTarget, { username, password })
    console.log('Login request sent', loginResult.data)
    // lebih baik diberi condition, if response OK, baru dispatch
    dispatch({
      type: LOGIN_REQUEST,
      payload: loginResult.data,
    })
    try {
      // const login_state = JSON.stringify(loginResult.data)
      localStorage.setItem('token', loginResult.data.accessToken)
      localStorage.setItem('refreshToken', loginResult.data.refreshToken)
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    console.log(error)
  }
}
