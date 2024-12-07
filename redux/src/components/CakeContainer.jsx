import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { buyCake } from '../features/cake/cakeSlice'

function CakeContainer() {
	const [value, setValue] = useState(0);

	// selector function
	const state = useSelector((state) => state.cake);

	// returns a reference to the dispatch function in redux store
	const dispatch = useDispatch();

	return(
		<>
			<h2>Cake Number: {state.numOfCakes}</h2>
			<input type='number' value={value} onChange={(e) => setValue(e.target.value) } />
			<button onClick={() => dispatch(buyCake(value))}>Buy Cake</button>
		</>
	);
}


export default CakeContainer
