import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes'
import axios from 'axios'


export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST })
    axios.
      get('https://jsonplaceholder.typicode.com/users/').
      then((res) => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data})).
      catch((error) => dispatch({ type: FETCH_USERS_FAILURE, payload: error.message }))
  }
}
