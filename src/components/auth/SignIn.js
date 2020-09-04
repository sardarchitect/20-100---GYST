import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import '../../stylesheets/_sign-in.scss'

const SignIn = ({ history }) => {
  const { currentAuth } = useContext(AuthContext);

  const handleSignIn = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  const signInWithPopupHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  if (currentAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sign-in">
      <div className="sign-in__logo">
        <h1> Get Your Sh!t Together</h1>
        <h2>A Life Organizer App</h2>
      </div>
      <h3>Sign In</h3>
      <form id="sign-in-form" onSubmit={handleSignIn}>
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Sign In</button>
        <button onClick={signInWithPopupHandler}>Sign in with Google</button>
      </form>

      <p>
        Need to register?
        <Link to="/sign-up">Sign up here</Link>
      </p>
    </div>
  );
};

export default withRouter(SignIn);
