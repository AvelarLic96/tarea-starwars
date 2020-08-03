import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SiteRoute from './SiteRoute';
import Home from './pages/Home';
import PeopleList from './pages/people/PeopleList';

//<SiteRoute exact path='/pokemons' component={PokemonList} />
//<SiteRoute exact path='/pokemons/:id' component={PokemonDetail} />

const Routes = () => {
	return (
		<BrowserRouter>
      <Switch>
      	<SiteRoute path='/people' component={PeopleList} />
      	<SiteRoute path='/' component={Home} />
      </Switch>
    </BrowserRouter>
	)
}

export default Routes;