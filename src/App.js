import React, { useState } from "react";
import './App.css';
import { Login } from "./components/login/Login";
import Game from "./components/game/Game";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Switch>
        <Route exact path="/game" component={Game} />
        <Route exact path="/" component={Login} />
        <Redirect to="" />
      </Switch>
    </Router>
  </>
  );
}

export default App;