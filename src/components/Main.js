import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import ObjectPage from "./ObjectPage";

export default () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/object" component={ObjectPage} />
    </Switch>
  </main>
);
