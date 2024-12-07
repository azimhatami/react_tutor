import { useEffect } from 'react'
import { getAsyncUsers } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux'


function UsersList() {
	const dispatch = useDispatch();
	const { loading, data, error } = useSelector(state => state.users);

	useEffect(() => {
		dispatch(getAsyncUsers())
	}, [dispatch])

	return(
		<>
			<h2>Users List</h2>
		{
			loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : (
				<div>
					{
						data.map(
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
