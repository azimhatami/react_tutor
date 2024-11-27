import { useEffect } from 'react'
import { fetchUsers } from '../redux/user/userActions'
import { useDispatch, useSelector } from 'react-redux'


function UsersList() {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);
	console.log(state)
	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])
	return(
		<>
			<h2>Users List</h2>
		</>
	);
}


export default UsersList
