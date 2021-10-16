import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Home, Shortlisted, Rejected } from "./pages";
// import koko from "./data/csvjson.json";
function App() {
  // let i = 0;
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
  //   image,
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
  //   q8,
  // } of newData) {
  //   const categories = Category.split(",").map((cat) => cat.trim());
  //   const pictures = images.split("\n");
  //   const itemObj = {
  //     id,
  //     productName,
  //     img: image,
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
  //     q8,
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
