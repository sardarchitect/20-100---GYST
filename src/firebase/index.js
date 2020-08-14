import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDb5NWqgYX3k2uXqdi_tGH7mLMyoQqxDs4",
  authDomain: "gyst-d33cb.firebaseapp.com",
  databaseURL: "https://gyst-d33cb.firebaseio.com",
  projectId: "gyst-d33cb",
  storageBucket: "gyst-d33cb.appspot.com",
  messagingSenderId: "91472427887",
  appId: "1:91472427887:web:efa4c453e382994cf3c69a",
  measurementId: "G-0XGQSHQDQX"
});

const db = firebase.firestore();
export { db };