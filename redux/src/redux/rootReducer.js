import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import milkReducer from './milk/milkReducer'


const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer
});


export default rootReducer
