function CourseCard(props) {
	return (
		<div className='course-item'>
			<div className='course-img'>
				<img src='/images/img1.jpg' alt='image one'/>
			</div>
			<div className='course-details'>
				<div className='course-header'>
					<div>
						<p className='course-title'>{props.course.title}</p>
						<p className='course-description'>{props.course.description}</p>
					</div>
					<span className='rate'>{props.course.rate}</span>
				</div>
				<div className='course-footer'>
					<div className='tags'>
						{props.course.tags.map((tag, index) => {
							return <span key={index} className='badge badge-secondary'>{tag}</span>
						})}
					</div>
					<div className='caption'>
						<div className='date'>
						{new Date(props.course.start).toLocaleDateString('en', {
						month: 'short',
						year: 'numeric',
						day: 'numeric'
						})}
						</div>
						<span className='badge badge-danger'>{props.course.status}</span>
					</div>
				</div>
				<div>
				</div>
			</div>
		</div>
	);
}


export default CourseCard;
