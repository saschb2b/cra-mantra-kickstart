import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Pokemons from "../../pokemons/containers/Pokemons";
import Pokemon from "../../pokemons/containers/Pokemon";

export default () => (
  <Route
    key="dashboard"
    path="/dashboard"
    render={() => (
      <Dashboard>
        <Switch>
          <Route exact path="/dashboard/pokemons" component={Pokemons} />
          <Route exact path="/dashboard/pokemons/:id" component={Pokemon} />
          <Redirect from="*" to="/dashboard/pokemons" />
        </Switch>
      </Dashboard>
    )}
  />
);
