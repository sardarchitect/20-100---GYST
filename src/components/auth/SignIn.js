import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const SignIn = ({ history }) => {

  const {currentAuth} = useContext(AuthContext);

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

  if (currentAuth) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Sign In</button>
      </form>

      <button
        onClick={() => {
          alert("google sign in not working");
        }}
      >
        Sign in with Google
      </button>
      <p>
        Need to register?
        <Link to="/sign-up">Sign up here</Link>
      </p>
    </div>
  );
};

export default withRouter(SignIn);