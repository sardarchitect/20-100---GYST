import React, { useCallback } from "react";
import { withRouter, Link } from "react-router-dom";
import { auth, db } from "../../firebase";

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(
    async (e) => {
      e.preventDefault();
      const { displayName, email, password } = e.target.elements;
      try {
        await auth.createUserWithEmailAndPassword(email.value, password.value);
        const uid = auth.currentUser.uid;
        createUser(uid, email.value, displayName.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  const createUser = (uid, email, displayName) => {
    db.collection('users').add({
      uid,
      email,
      displayName
    })
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
      <label>Display Name:</label>
        <input
          type="text"
          name="displayName"
          placeholder="Enter your display name"
        />
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
        <button type="submit">Sign Up</button>
      </form>

      <button
        onClick={() => {
          alert("google sign in not working yet");
        }}
      >
        Sign in with Google
      </button>
      <p>
        Already have an account?
        <Link to="/sign-in">Sign in here</Link>
      </p>
    </div>
  );
};

export default withRouter(SignUp);