import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SiteRoute from './SiteRoute';
import Home from './pages/Home';
import PeopleList from './pages/people/PeopleList';
import StarshipList from './pages/starship/StarshipList';

//<SiteRoute exact path='/pokemons' component={PokemonList} />
//<SiteRoute exact path='/pokemons/:id' component={PokemonDetail} />

const Routes = () => {
	return (
	<BrowserRouter>
      <Switch>
      	<SiteRoute path='/starship' component={StarshipList} />
      	<SiteRoute path='/people' component={PeopleList} />
      	<SiteRoute path='/' component={Home} />
      </Switch>
    </BrowserRouter>
	)
}

export default Routes;