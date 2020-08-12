import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://gyst-d33cb.firebaseio.com",
  projectId: "gyst-d33cb",
  storageBucket: "gyst-d33cb.appspot.com",
  messagingSenderId: "91472427887",
  appId: "1:91472427887:web:efa4c453e382994cf3c69a",
  measurementId: "G-0XGQSHQDQX"
});

export { firebaseConfig as firebase };