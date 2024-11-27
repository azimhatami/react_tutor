import { FETCH_USERS_REQUEST } from './userTypes';
import { FETCH_USERS_SUCCESS } from './userTypes';
import { FETCH_USERS_FAILURE } from './userTypes';


const initialState = {
  loading: false,
  data: [],
  error: '',
}


function userReducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
}


export default userReducer
