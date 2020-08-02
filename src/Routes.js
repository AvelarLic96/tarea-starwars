import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SiteRoute from './SiteRoute';
import Home from './pages/Home';

//<SiteRoute exact path='/pokemons' component={PokemonList} />
//<SiteRoute exact path='/pokemons/:id' component={PokemonDetail} />

const Routes = () => {
	return (
		<BrowserRouter>
      <Switch>
      	<SiteRoute path='/' component={Home} />
      </Switch>
    </BrowserRouter>
	)
}

export default Routes;