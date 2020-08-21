import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

import { fetchApi } from './components/fetchApi'

import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
        <Switch>
          <PrivateRoute path='/protected' component={BubblePage} />
          <Route path='/login' component={Login} />
          <Route>
            <Login />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
