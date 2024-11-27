import { useEffect } from 'react'
import { fetchUsers } from '../redux/user/userActions'
import { useDispatch, useSelector } from 'react-redux'


function UsersList() {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	return(
		<>
			<h2>Users List</h2>
		{
			state.loading ? (
				<p>Loading...</p>
			) : state.error ? (
				<p>{state.error}</p>
			) : (
				<div>
					{
						state.data.map(
							(user) => <li key={user.id}>{user.name}</li>
						)
					}
				</div>
			)
		}
		</>
	);
}


export default UsersList
