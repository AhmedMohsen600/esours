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
  const data = {
    all: [],
    furniture: [],
    lighting: [],
    accessories: [],
    textile: [],
    materials: [],
  };

  for (let { id, productName, img, category } of koko) {
    const categories = category.split(",").map((cat) => cat.trim());
    const itemObj = {
      id,
      productName,
      img,
      categories,
    };

    data.all.push(itemObj);
    // console.log({ categories });
    for (let category of categories) {
      if (category.toLowerCase().trim() === "n/a") continue;
      data[category.toLowerCase().trim()].push(itemObj);
    }
  }

  // console.log(JSON.stringify(data, "", 4));

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
