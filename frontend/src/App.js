import React from 'react';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/homepage.component';
import NavBar from './components/navbar.component';
import Details from './components/details.component';
import MyAccount from './components/myAccount.component';
import Cart from './components/cart.component';
import FinalBuy from './components/finalBuy.component';
import Login from './components/login.component';

function App() {
  // const [isLogedIn, setIsLogedIn] = useState(false);
  return (

    <div className='main'>
      <NavBar />
      <Switch >
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/myaccount' component={MyAccount} />
        <Route path='/finalBuy' component={FinalBuy} />

      </Switch>
    </div>

  );
}

export default App;
