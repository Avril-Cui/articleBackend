import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyCmsx_ApuSSkCVwidu5TT-U6RQgWQXIceM",
  authDomain: "test-project-9d498.firebaseapp.com",
  databaseURL: "https://test-project-9d498-default-rtdb.firebaseio.com",
  projectId: "test-project-9d498",
  storageBucket: "test-project-9d498.appspot.com",
  messagingSenderId: "958187934386",
  appId: "1:958187934386:web:f90e3c79daffd6607defab",
  measurementId: "G-1BY71MGJ8T"
};

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
  }
  
  export default firebase;