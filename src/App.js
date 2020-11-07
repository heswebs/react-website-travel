import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
       <Header />

       <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
       </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
