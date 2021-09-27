import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './public/Login/Index';
import Dashboard from './private/Dashboard/Index';


function Routes(){

  function PrivateRoute({ children, ...rest }){

    return(
      <Route {...rest} render={() => {
        return localStorage.getItem('jwToken')
          ? children
          : <Redirect to="/" />
      }} />
    )
  }

  return(
    <BrowserRouter>
      <Route path="/" exact>
        <Login />
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </BrowserRouter>
  )
}

export default Routes;