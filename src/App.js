import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './styles/main.scss';

import Main from './views/pages/main';
import Install from "./views/pages/install";
import Use from "./views/pages/use";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/install' component={Install}/>
        <Route exact path='/use' component={Use}/>
        <Route component={() => <Redirect to="/"/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

