import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './public/Login/Index';
import Dashboard from './private/Dashboard/Index';
import ListClient from './private/Clientes/ListClient';
import Imoveis from './private/Imoveis/Index';
import Contratos from './private/Contratos/Index';
import Contas from './private/Contas/Index';
import Config from './private/Config/Index';

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
      <PrivateRoute path="/clientes">
        <ListClient />
      </PrivateRoute>
      <PrivateRoute path="/imoveis">
        <Imoveis />
      </PrivateRoute>
      <PrivateRoute path="/contratos">
        <Contratos />
      </PrivateRoute>
      <PrivateRoute path="/contas">
        <Contas />
      </PrivateRoute>
      <PrivateRoute path="/config">
        <Config />
      </PrivateRoute>
    </BrowserRouter>
  )
}

export default Routes;