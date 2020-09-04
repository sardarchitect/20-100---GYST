import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  AuthProvider,
} from "./context";

import {PrivateRoute} from './helpers/PrivateRoute';
import {Application} from './components/Application';
import  SignUp  from "./components/auth/SignUp";
import  SignIn  from "./components/auth/SignIn";
import { Sandbox } from "./sandbox/Sandbox";

const App = () => {

  return (
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Application} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sandbox" component={Sandbox} />
      </Switch>
    </AuthProvider>
  );
};

export default App;
