import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Overview from "./components/Overview";
import ImageRecognizer from "./components/ImageRecognizer";
import VideoRecognizer from "./components/VideoRecognizer";
import TextRecognizer from "./components/TextRecognizer";
import React from "react";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/image">
          <NavBar />
          <ImageRecognizer />
        </Route>
        <Route path="/video">
          <NavBar />
          <VideoRecognizer />
        </Route>
        <Route path="/text">
          <NavBar />
          <TextRecognizer />
        </Route>
        <Route path="/">
          <NavBar />
          <Overview />
        </Route>
      </Switch>
    </Router>
  );
}
