import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'

import store from './store';
import './styles/main.scss';

import Main from './views/pages/main';
import Install from "./views/pages/install";
import Use from "./views/pages/use";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/install' component={Install}/>
          <Route exact path='/use' component={Use}/>
          <Route component={() => <Redirect to="/"/>}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

