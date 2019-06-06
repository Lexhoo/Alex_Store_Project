import React, { Component }  from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Card from './Card';
import Default from './Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/card" component={Card} />
          <Route component={Default} />   
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
