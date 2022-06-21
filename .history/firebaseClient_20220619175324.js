import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

