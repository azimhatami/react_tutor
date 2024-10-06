function CourseCard({ course }) {
	return (
		<div className='course-item'>
			<div className='course-img'>
				<img src={course.imageUrl} alt={course.title}/>
			</div>
			<div className='course-details'>
				<CourseCardHeader title={course.title} description={course.description} rate={course.rate}/>
				<CourseCardFooter tags={course.tags} start={course.start} status={course.status}/>
			</div>
		</div>
	);
}


function CourseCardHeader({ title, description, rate}) {
	return (
		<div className='course-header'>
			<div>
				<p className='course-title'>{title}</p>
				<p className='course-description'>{description}</p>
			</div>
			<span className='rate'>{rate}</span>
		</div>
	);
}


function CourseCardFooter({ tags, start, status }) {
	const startedAt = new Date(start).toLocaleDateString('en', {
		month: 'short',
		year: 'numeric',
		day: 'numeric'
	});

	return (
		<div className='course-footer'>
			<div className='tags'>
				{tags.map((tag) => {
					return <span key={tag} className='badge badge-secondary'>{tag}</span>
				})}
			</div>
			<div className='caption'>
				<div className='date'>
					{startedAt}
				</div>
				<span className={`badge ${status === 'Active' ? 'badge-primary' : status === 'Upcoming' ? 'badge-danger' : 'badge-secondery'}`}>{status}</span>
			</div>
		</div>
	);
}


export default CourseCard;
