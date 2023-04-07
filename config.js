import firebase from "firebase";
require("@firebase/firestore");

/*
var firebaseConfig = {
  apiKey: "AIzaSyCZrG0BF6LrnRpWZjsPQxNGyMCLByo8HrM",
  authDomain: "e-ride-549e4.firebaseapp.com",
  projectId: "e-ride-549e4",
  storageBucket: "e-ride-549e4.appspot.com",
  messagingSenderId: "588298110700",
  appId: "1:588298110700:web:34e3df331c6b1fc95047c9",
  measurementId: "G-G3K7BWL5LH"
};*/
const firebaseConfig = {
  apiKey: "AIzaSyCnZkSGphABPzn8oqH2Y7z7XSf8nokPass",
  authDomain: "c-71-27ecc.firebaseapp.com",
  projectId: "c-71-27ecc",
  storageBucket: "c-71-27ecc.appspot.com",
  messagingSenderId: "212914548961",
  appId: "1:212914548961:web:a72c0ac93cb51279ad47a0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
