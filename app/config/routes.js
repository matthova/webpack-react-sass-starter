import React from 'react';
import Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';

export default (
  <Route path='/' component={ Main }>
    <Route path="/" component={ Home }/>
    <IndexRoute component={ Home } />
  </Route>
);
