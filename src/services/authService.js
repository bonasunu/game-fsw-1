import http from './httpService'
import jwtDecode from 'jwt-decode'

const endPoint = `https://pacific-taiga-53059.herokuapp.com/login`
const tokenKey = 'binar.access.token'
const refreshKey = 'binar.refresh.token'

// http.setJwt(getJwt())

// login
export async function login(username, password) {
  const { data } = await http.post(endPoint, {
    username: username,
    password: password,
  })
  localStorage.setItem(tokenKey, data.accessToken)
  localStorage.setItem(refreshKey, data.refreshToken)
}

export function logout() {
  localStorage.removeItem(tokenKey)
  localStorage.removeItem(refreshKey)
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem(tokenKey)
    return jwtDecode(token)
  } catch (err) {
    return null
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey)
}

// export function getNewAccessToken() {
//   const refresh = localStorage.getItem('refreshToken')
//   const request = await http.post(config.apiUrl + 'refresh-token', {
//     refreshToken: refresh,
//   })
//   if (request) {
//     for (var k in request) {
//       localStorage.setItem(k, request[k])
//     }
//   }
// }

const auth = {
  login,
  logout,
  getCurrentUser,
  getJwt,
}

export default auth
