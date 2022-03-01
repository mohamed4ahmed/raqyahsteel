import firebase from "firebase/app";
import "firebase/firestore";

// Config
const config = {

  apiKey: "AIzaSyBhHeYE1e0IYjGnIAE9LBfO5GSzV1Ivv9g",
  authDomain: "smart-beam-994a1.firebaseapp.com",
  projectId: "smart-beam-994a1",
  storageBucket: "smart-beam-994a1.appspot.com",
  messagingSenderId: "15050938219",
  appId: "1:15050938219:web:7f5ed217c0dca80d399e2e",
  measurementId: "G-PM5XX257EE",
  };

const firebaseInit = firebase.initializeApp(config);

export { firebaseInit };


