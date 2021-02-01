import axios from "axios"
import { toast } from "react-toastify"

axios.interceptors.response.use(null, (err) => {
  const expectedError =
    err.response && err.response.status >= 400 && err.response.status < 500

  if (!expectedError) {
    console.log("Logging the unexpected error", err)
    toast.error("An unexpected error occured.")
  }

  return Promise.reject(err)
})

function setJwt(token) {
  axios.defaults.headers.common["Authorization"] = token
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
}

export default http
