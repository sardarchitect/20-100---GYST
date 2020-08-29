import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  AuthProvider,
} from "./context";

import {PrivateRoute} from './PrivateRoute';
import {Application} from './Application';
import  SignUp  from "./components/auth/SignUp";
import  SignIn  from "./components/auth/SignIn";

const App = () => {

  return (
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Application} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </AuthProvider>
  );
};

export default App;
