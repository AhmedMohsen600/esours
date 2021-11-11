import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Home, Shortlisted, Rejected } from "./pages";
// import koko from "./data/csvjson.json";
// import newData from "./data/fuckData.json";
function App() {
  // const data = {
  //   all: [],
  //   furniture: [],
  //   lighting: [],
  //   accessories: [],
  //   textile: [],
  //   materials: [],
  // };

  // for (let {
  //   id,
  //   productName,
  //   img,
  //   images,
  //   Category,
  //   a1,
  //   a2,
  //   q1,
  //   q2,
  //   q3,
  //   q4,
  //   q5,
  //   q6,
  //   q7,
  //   a8,
  // } of newData) {
  //   const categories = Category.split(",").map((cat) => cat.trim());
  //   const pictures = images.split("\n");
  //   const itemObj = {
  //     id,
  //     productName,
  //     img,
  //     images: pictures,
  //     a1,
  //     a2,
  //     q1,
  //     q2,
  //     q3,
  //     q4,
  //     q5,
  //     q6,
  //     q7,
  //     q8: a8,
  //     categories,
  //   };

  //   data.all.push(itemObj);
  //   // console.log({ categories });
  //   for (let category of categories) {
  //     if (category.toLowerCase().trim() === "n/a") continue;
  //     data[category.toLowerCase().trim()].push(itemObj);
  //   }
  // }

  // console.log(JSON.stringify(data, "", 4));

  return (
    <Router>
      <Switch>
        <Route exact path="/winners">
          <Home />
        </Route>
        <Route exact path="/recommend">
          <Shortlisted />
        </Route>
        <Route exact path="/rejected">
          <Rejected />
        </Route>
      </Switch>
      <Redirect path="/" to="/winners" />
    </Router>
  );
}

export default App;
