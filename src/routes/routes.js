import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from '../App';
import Home from '../views/Home';
import Portfolio from '../views/Portfolio';
import CV from '../views/CV';
import NotFound from '../views/NotFound';

let routes = (
	<Route name="app" path="/" component={App}>
	  <IndexRoute component={Home} />
	  <Route path="portfolio" component={Portfolio} />
	  <Route path="cv" component={CV} />
	  <Route path="*" component={NotFound}/>
	</Route>
);

export default routes;