import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCPckSldQvOWPIkXBcvWeYD9MrtCvWhoNQ",
  authDomain: "todo-app-vuetify.firebaseapp.com",
  databaseURL: "https://todo-app-vuetify.firebaseio.com",
  projectId: "todo-app-vuetify",
  storageBucket: "",
  messagingSenderId: "464397492351",
  appId: "1:464397492351:web:4d1cb177bd8ee4f4"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//db.settings({ timestampsInSnapshots: true });

export default db;
