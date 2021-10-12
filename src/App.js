import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Home, Shortlisted, Rejected } from "./pages";
import koko from "./data/csvjson.json";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/all-submitions">
          <Home />
        </Route>
        <Route exact path="/shortlist">
          <Shortlisted />
        </Route>
        <Route exact path="/rejected">
          <Rejected />
        </Route>
      </Switch>
      <Redirect path="/" to="/all-submitions" />
    </Router>
  );
}

export default App;
