import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Switch>
  </main>
);

export default Main;
