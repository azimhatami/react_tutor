import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'


function CakeContainer() {
	const [value, setValue] = useState(0);

	// selector function
	const state = useSelector((state) => state);

	// returns a reference to the dispatch function in redux store
	const dispatch = useDispatch();

	return(
		<>
			<h2>Cake Number: {state.numOfCakes}</h2>
			<input type='number' value={value} onChange={(e) => setValue(e.target.value) } />
			<button onClick={() => dispatch({ type: 'BY_CAKE', payload: value })}>Buy Cake</button>
		</>
	);
}


export default CakeContainer
