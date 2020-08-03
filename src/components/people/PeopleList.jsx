import React from 'react';

import PeopleItem from './PeopleItem';

const PeopleList = ({peopleInfo, error, loading}) => {
    if (error) {
			return (
					<div className="alert alert-danger">
					<strong>Error!</strong> There was a problem fetching people from Star Wars.
					</div>
			);
    }
      
		if (loading) {
			return ( 
				<div className="spinner-border text-danger" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			);
		}

		return (
			<div className="row" style={{marginLeft:"5rem"}}>	
				{peopleInfo.map(person => {
					return(
						<PeopleItem
							person={person}
							key={person.name}
						/>
					)
				})}
			</div>
		)
}

export default PeopleList;