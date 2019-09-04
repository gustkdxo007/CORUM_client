import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import EditPage from "./Pages/EditPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit" component={EditPage} />
      </Switch>
    </Router>
  );
};

export default App;
