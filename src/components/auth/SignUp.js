import React, { useCallback } from "react";
import { withRouter, Link } from "react-router-dom";
import { auth, db, provider } from "../../firebase";
import '../../stylesheets/_sign-up.scss'

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

  const createUser = (uid, email, displayName) => {
    db.collection("users").add({
      uid,
      email,
      displayName,
    });
  };

  return (
    <div className="sign-up">
      <div className="sign-up__logo">
        <h1> Get Your Sh!t Together</h1>
        <h2>A Life Organizer App</h2>
      </div>
      <h3>Sign Up</h3>
      <form id="sign-up-form" onSubmit={handleSignUp}>
        <label>Display Name:</label>
        <input
          type="text"
          name="displayName"
          placeholder="Enter your display name"
        />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Sign Up</button>
        <button onClick={signInWithPopupHandler}>Sign in with Google</button>
      </form>

      <p>
        Already have an account?
        <Link to="/sign-in">Sign in here</Link>
      </p>
    </div>
  );
};

export default withRouter(SignUp);
