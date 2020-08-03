import React from 'react';

import StarshipItem from './StarshipItem';

const StarshipList = ({starShipInfo, error, loading}) => {
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
				{starShipInfo.map(ship => {
					return(
						<StarshipItem
							ship={ship}
							key={ship.name}
						/>
					)
				})}
			</div>
		)
}

export default StarshipList;