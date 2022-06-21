import { initializeApp, FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkqCpt7urvGI7bnDrB7J0Yw9Rq2tfZywI",
  authDomain: "aspect-user-auth.firebaseapp.com",
  projectId: "aspect-user-auth",
  storageBucket: "aspect-user-auth.appspot.com",
  messagingSenderId: "216064182431",
  appId: "1:216064182431:web:208ecca4a4c4ee323b3aaa",
  measurementId: "G-19KFZ48K0C"
};

if (!FirebaseApp.length) {
    const app = initializeApp(firebaseConfig);
};

export const auth = getAuth();