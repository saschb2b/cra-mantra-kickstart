import React from "react";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { createApp } from "@wertarbyte/module-loader";
import Application from "./modules/core/components/Application";
import Core from "./modules/core";
import Dashboard from "./modules/dashboard";
import Pokemons from "./modules/pokemons";
import configureStore, {
  createReducer,
  history
} from "./configs/configureStore";

const store = configureStore({});

const app = createApp({
  store,
  replaceReducers: reducers => {
    store.replaceReducer(createReducer(reducers));
  }
});
app.loadModule(Core);
app.loadModule(Dashboard);
app.loadModule(Pokemons);
app.init();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Application>
          {React.Children.map(app.routes, (child, i) =>
            React.cloneElement(child, { key: i })
          )}
        </Application>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
