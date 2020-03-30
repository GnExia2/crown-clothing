import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'

import './App.css';

import HomePage from './pages/homepage/homepage.component';




class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />

        </Switch>
      </div>
    );
  }
}

export default App;
