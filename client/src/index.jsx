// index.jsx
import ProductOverview from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
// CC - imported and added
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route
      exact path='/:id'
      component={ProductOverview}
    />
    <Route
      exact path='/'
      component={ProductOverview}
    />
  </Router>, document.getElementById('product-overview'));