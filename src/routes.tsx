import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import FoyersMap from './pages/FoyersMap';

function Routes() {
  return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/app" component={FoyersMap} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;