const courseStatus = ['All', 'Active', 'Completed', 'Upcoming']


function Header() {

	return(
		<>
			<h1>My Courses (3)</h1>
			<div className='course-status'>
				{courseStatus.map(s => <div key={s}>{s}</div>)}
			</div>
		</>
	)
}


export default Header;
