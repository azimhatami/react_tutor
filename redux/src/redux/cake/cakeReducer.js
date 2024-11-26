const initialState = {
  numOfCakes: 10,
};


function cakeReducer(state = initialState, action) {
  switch(action.type) {
    case 'BY_CAKE':
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state;
  }
}


export default cakeReducer
