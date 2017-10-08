import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Client from './Client';
import Onboarding from './Onboarding';

const Main = () => (
    <div class="col-sm-9 col-lg-10">

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/client' component={Client}/>
        <Route path='/onboarding' component={Onboarding}/>
      </Switch>
      </div>
  )

export default Main;
