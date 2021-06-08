import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/image">
            <NavBar />
            <h1>Image 🤳</h1>
          </Route>
          <Route path="/video">
            <NavBar />
            <h1>Video 🎥</h1>
          </Route>
          <Route path="/text">
            <NavBar />
            <h1>Text 🗒</h1>
          </Route>
          <Route path="/">
            <NavBar />
            <h1>Overview 🌴</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
