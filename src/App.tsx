import React, { FunctionComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
// import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
// import theme from "./helper/theme";
import layoutRoutes from "routes/index";
import { store, persistor, history } from "appRedux/store";
import { ToastContainer } from "react-toastify";
import "./assets/scss/app.scss";
import "react-toastify/dist/ReactToastify.css";

interface AppProps {}
/**
 * Application Topbar Component
 */
const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="App">
      {/* Redux provider */}
      <Provider store={store}>
        {/* Browser router */}
        <ConnectedRouter history={history}>
          {/* Persist state with local storage */}
          <PersistGate loading={null} persistor={persistor}>
            {/* Layout Routes */}
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/login" />}
              />
              {layoutRoutes.map((prop: any) => (
                <Route
                  path={prop.path}
                  component={prop.component}
                  key={prop.path}
                />
              ))}
            </Switch>
            {/* Layout Routes */}
          </PersistGate>
        </ConnectedRouter>
      </Provider>
      <ToastContainer
        position="top-right"
        closeOnClick
        autoClose={2500}
        hideProgressBar
        limit={1}
      />
    </div>
  );
};

export default App;
