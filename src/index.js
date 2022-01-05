import React from "react";
import ReactDOM from "react-dom";
import Cards from "./App";
import './App.css'
import Gallary from "./Gallary";
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'
import indexRoute from './routs/index';


ReactDOM.render(
     
      <>
      <div className="container">
      

      <BrowserRouter>
        <Switch>
        <Route

          exact
          path="/"
          render={()=><Redirect to="/login"/>}
        />
        {
          indexRoute.map((route,i)=>{
            return(
              <Route
              key={i}
                path={route.path}
                component={route.component}
              />
            )
          })
        }
        </Switch>
      </BrowserRouter>
      </div>
      </>,
      document.getElementById("root")

 
);