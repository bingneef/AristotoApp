import { currentUser } from '../actions/userActions';
import axios from '../axios'

const getUser = (props) => {
  axios.get('/current_user').then((response) => {
    props.dispatch(currentUser(response.data));
  })
}

const logout = (props) => {
  return axios.post('/logout').then((response) => {
    props.dispatch(currentUser({}));
  })
}

export { getUser, logout }
