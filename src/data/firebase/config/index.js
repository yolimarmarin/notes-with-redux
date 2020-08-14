import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCELns8vjH9HaH6EXnyc-5qxHYVEMKPKCY",
  authDomain: "notes-learning-project.firebaseapp.com",
  databaseURL: "https://notes-learning-project.firebaseio.com",
  projectId: "notes-learning-project",
  storageBucket: "notes-learning-project.appspot.com",
  messagingSenderId: "493873411650",
  appId: "1:493873411650:web:72c61e2a7960fe8fc81fdb",
  measurementId: "G-EX09Q1307Q",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = app.auth();

auth
  .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    console.log('persistance enable');
  })
  .catch((error) => {
    console.log(error);
  });

export { firebase, auth };
