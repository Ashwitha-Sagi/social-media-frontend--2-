import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

const MainContent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default MainContent;
