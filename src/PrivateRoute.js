import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context";

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentAuth ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/sign-in"} />
        )
      }
    />
  );
};
