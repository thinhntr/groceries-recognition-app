import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Overview from "./components/Overview";
import ImageRecognizer from "./components/ImageRecognizer";
import VideoRecognizer from "./components/VideoRecognizer";
import TextRecognizer from "./components/TextRecognizer";
import NavBar from "./components/NavBar";
import React from "react";

export default function App() {
  return (
    <Router>
      <Switch>
        {/* {routes.map((route, index) => (
          <Route key={index} path={route[1]}>
            <NavBar items={routes} activeIndex={index} />
            {route[2]}
          </Route>
        ))} */}
        <Route path="/image">
          <NavBar activeIndex={1} />
          <ImageRecognizer />
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
        </Route>
      </Switch>
    </Router>
  );
}
