function CourseCard() {
	return (
		<div className='course-item'>
			<div className='course-img'>
				<img src='/images/img1.jpg' alt='image one'/>
			</div>
			<div className='course-details'>
				<div className='course-header'>
					<div>
						<p className='course-title'>React</p>
						<p className='course-description'>The Ultimate React and redux course</p>
					</div>
					<span className='rate'>4.5</span>
				</div>
				<div className='course-footer'>
					<div className='tags'>
						<span className='badge badge-secondary'>React</span>
						<span className='badge badge-secondary'>React</span>
					</div>
					<div className='caption'>
						<div className='date'>
						{new Date().toLocaleDateString('en', {
						month: 'short',
						year: 'numeric',
						day: 'numeric'
						})}
						</div>
						<span className='badge badge-danger'>Upcoming</span>
					</div>
				</div>
				<div>
				</div>
			</div>
		</div>
	);
}


export default CourseCard;
