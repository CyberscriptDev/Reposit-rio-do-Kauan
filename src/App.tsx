import { History } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Home } from "./components/Home";

type AppProps = {
  history: History;
};

export default function App ({ history }: AppProps) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/componentes">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}