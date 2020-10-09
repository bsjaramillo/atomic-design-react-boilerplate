import React, {FunctionComponent} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './templates/Home/Home';
import Nav from './organisms/Nav/Nav';
import About from './templates/About/About';

import './_style.scss';

const Main:FunctionComponent=()=> (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </BrowserRouter>
);
// Main.defaultProps={title:'Boilerplate Atomic Design React TS'}
export default Main;
