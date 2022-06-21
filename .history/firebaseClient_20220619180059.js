import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import firebase from 'firebase/compat/app';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBkqCpt7urvGI7bnDrB7J0Yw9Rq2tfZywI",
    authDomain: "aspect-user-auth.firebaseapp.com",
    projectId: "aspect-user-auth",
    storageBucket: "aspect-user-auth.appspot.com",
    messagingSenderId: "216064182431",
    appId: "1:216064182431:web:208ecca4a4c4ee323b3aaa",
    databaseURL: "https://aspect-user-auth-default-rtdb.firebaseio.com/",
    measurementId: "G-19KFZ48K0C"  
};

export default function firebaseClient(){
    if (!firebase.app.lenth){
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}

