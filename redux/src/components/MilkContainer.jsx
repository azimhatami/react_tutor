import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyMilk } from '../features/milk/milkSlice'


function MilkContainer() {
	const [value, setValue] = useState(2);

	const milk = useSelector((state) => state.milk);

	const dispatch = useDispatch();

	return(
		<>
			<h2>Milk Numbers: {milk.numOfMilks}</h2>
			<button onClick={() => dispatch(buyMilk(value))}>Buy Milk</button>
		</>
	);
}


export default MilkContainer
