import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import Login from './public/Login/Index';
import Dashboard from './private/Dashboard/Index';
import ClientList from './private/Clientes/clientList';
import Contratos from './private/Contratos/Index';
import Contas from './private/Contas/Index';
import Conf from './private/Conf/Index';
import store from './store';

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
        <Provider store={store}>
          <ClientList />
        </Provider>
      </PrivateRoute>
      <PrivateRoute path="/contratos">
        <Contratos />
      </PrivateRoute>
      <PrivateRoute path="/contas">
        <Contas />
      </PrivateRoute>
      <PrivateRoute path="/conf">
        <Conf />
      </PrivateRoute>
    </BrowserRouter>
  )
}

export default Routes;