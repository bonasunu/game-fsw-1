import axios from 'axios'
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
} from '../constants/userConstants'
import Router from 'next/router'

export const register = (
  first_name,
  last_name,
  email,
  username,
  password,
  profile_picture
) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    // const img = 'https://sequelize.org/master/image/github.png'

    const { data } = await axios.post(
      'https://pacific-taiga-53059.herokuapp.com/register',
      {
        first_name,
        last_name,
        email,
        username,
        password,
        profile_picture,
      }
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    alert('registrasi berhasil')
    Router.push('/login')
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    if (error.response.data.message) {
      alert(error.response.data.message)
    } else alert(error.message)
  }
}
