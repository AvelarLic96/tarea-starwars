import React from 'react';

import Logo from '../../assets/images/starwars-logo.png';
import './PeopleItem.css';

const PeopleItem = ({person}) => {
	return (
		<>
			<div className="card" style={{width: "18rem", margin: "1rem"}}>
				<img src={Logo} id="logo" className="card-img-top" alt={person.name}></img>
				<div className="card-body">
					<h5 className="card-title">{person.name}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><strong>Height: </strong>{person.height}</li>
					<li className="list-group-item"><strong>Mass: </strong>{person.mass}</li>
					<li className="list-group-item"><strong>Hair Color: </strong>{person.hair_color}</li>
					<li className="list-group-item"><strong>Skin Color: </strong>{person.skin_color}</li>
				</ul>
			</div>
		</>
	)
}

export default PeopleItem;