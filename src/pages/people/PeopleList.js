import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	fetchError,
	fetchRequest,
	fetchSuccess,
} from '../../actions/people.action';
import { fetchPeopleList } from '../../api/starwars.people.api';
import PeopleListComponent from '../../components/people/PeopleList';

function PeopleList() {

	const dispatch = useDispatch();
	const {list: peopleInfo, error, loading} = useSelector(({people}) => people);

	useEffect(() => { 
		dispatch(fetchRequest());
		fetchPeopleList()
			.then((response) => {
				console.log('list', response);
				dispatch(fetchSuccess(response.results));
			})
			.catch(err => {
				dispatch(fetchError());
				console.log('err', err);
			});
	}, [dispatch]);

	return (
		<div className="row">
      <div className="col-md-12 text-center">
				<PeopleListComponent	 
					error={error}
					loading={loading}
					peopleInfo={peopleInfo}
				/>
			</div>
		</div>
	);
}

export default PeopleList;