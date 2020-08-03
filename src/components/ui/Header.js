import React from 'react';
import {
  Link
} from "react-router-dom";
//<img src={Logo} alt="Applaudo logo" width="50" />

export default () => {
    return (
      <nav className="navbar navbar-dark bg-dark text-left" style={{justifyContent: 'flex-start'}}>
        <Link className="navbar-brand" to="/">        
          Google - Star Wars 
        </Link>
        <li className="nav-item">
          <Link to="/people" style={{color: 'white'}}>People</Link>
        </li>
        <li className="nav-item">
          <Link to="/starship" style={{color: 'white'}}>Starship</Link>
        </li>
        <li className="nav-item">
          <Link to="/pokemons" style={{color: 'white'}}>Planet</Link>
        </li>
      </nav>
    );
  }  