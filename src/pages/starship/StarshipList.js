import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	fetchError,
	fetchRequest,
	fetchSuccess,
} from '../../actions/starship.action';
import { fetchstarshipList } from '../../api/starwars.starship.api';
import StarshipListComponent from '../../components/starship/StarshipList';

function StarshipList() {

	const dispatch = useDispatch();
	const {list: starShipInfo, error, loading} = useSelector(({starship}) => starship);

	useEffect(() => { 
		dispatch(fetchRequest());
		fetchstarshipList()
			.then((response) => {
				console.log('list', response);
				dispatch(fetchSuccess(response.results));
			})
			.catch(err => {
                dispatch(fetchError());
                console.log('error', err);
			});
	}, [dispatch]);

	return (
		<div className="row">
            <div className="col-md-12 text-center">
				<StarshipListComponent	 
					error={error}
					loading={loading}
					starShipInfo={starShipInfo}
				/>
			</div>
		</div>
	);
}

export default StarshipList;