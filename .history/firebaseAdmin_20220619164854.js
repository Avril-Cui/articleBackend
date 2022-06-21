const admin = require("firebase-admin");
const serviceAccount = require("../aspect-user-auth-firebase-adminsdk-h0gdu-a92f8d4480.json");

export const verifyIdToken = (token) => {
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://test-project-9d498-default-rtdb.firebaseio.com",
        })
    }
}