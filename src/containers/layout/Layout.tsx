import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "components/header/Header";
import dashRoutes from "routes/dashRoutes";
import ProtectedRoute from "routes/protectedRoute";

interface DashLayotProps {
  location: any;
}

const Layout: FunctionComponent<DashLayotProps> = props => {
  return (
    <main className="main-content" id="content-scroll">
      <Header />
      <ProtectedRoute>
        <Switch>
          {dashRoutes.map(prop => (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={prop.path}
            />
          ))}
        </Switch>
      </ProtectedRoute>
    </main>
  );
};

export default Layout;
