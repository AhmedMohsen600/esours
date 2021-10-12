import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Shortlisted, Rejected } from "./pages";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/short-list">
          <Shortlisted />
        </Route>
        <Route exact path="/rejected">
          <Rejected />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
