const admin = require("firebase-admin");
const serviceAccount = require("../aspect-user-auth-firebase-adminsdk-h0gdu-a92f8d4480.json");

export const verifyIdToken = (token) => {
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://aspect-user-auth-default-rtdb.firebaseio.com/",
        })
    }
}