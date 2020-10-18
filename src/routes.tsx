import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import FoyersMap from './pages/FoyersMap';
import CreateFoyer from './pages/CreateFoyer';
import Foyer from './pages/Foyer';

function Routes() {
  return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/app" component={FoyersMap} />

				<Route path="/foyers/create" exact component={CreateFoyer} />
				<Route path="/foyers/:id" component={Foyer} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;