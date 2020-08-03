import React from 'react';

const PeopleItem = ({person}) => {
	return (
		<div className="col-md-3">
			<h5 className="card-title">{person.name}</h5>
		</div>
	)
}

export default PeopleItem;