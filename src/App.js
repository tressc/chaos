import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home.jsx';
import Bag from './components/bag.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bag" component={Bag} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
