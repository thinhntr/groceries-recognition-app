import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import React from "react";

import routes from "./routes";

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route path={route[1]}>
            <NavBar items={routes} activeIndex={index} />
            {route[2]}
          </Route>
        ))}
        {/* <Route path="/image">
          <NavBar activeIndex={1} />
        </Route>
        <Route path="/video">
          <NavBar activeIndex={2} />
          <VideoRecognizer />
        </Route>
        <Route path="/text">
          <NavBar activeIndex={3} />
          <TextRecognizer />
        </Route>
        <Route path="/">
          <NavBar activeIndex={0} />
          <Overview />
        </Route> */}
      </Switch>
    </Router>
  );
}
