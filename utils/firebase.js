import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWzdF0jYdlTJFoR-JMpUsQy5zfyeKzeEI",
  authDomain: "scheduler-b635c.firebaseapp.com",
  databaseURL: "https://scheduler-b635c-default-rtdb.firebaseio.com",
  projectId: "scheduler-b635c",
  storageBucket: "scheduler-b635c.appspot.com",
  messagingSenderId: "369357101330",
  appId: "1:369357101330:web:2e5e0d2dbfee745a3abbcb",
  measurementId: "G-JS9D11GEMZ",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
