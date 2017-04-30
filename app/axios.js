import axios from 'axios'
import { browserHistory } from 'react-router'

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: `${ webpackEnv.SERVER_HOST }/api/v1`
})

if (localStorage.getItem('apiToken')) {
  axios.defaults.headers.common.authorization = `Token token=${ localStorage.getItem('apiToken') }`
}

// Add a response interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      browserHistory.push('/logout')
      return null
    }
    return Promise.reject(error);
  }
)

export default instance
