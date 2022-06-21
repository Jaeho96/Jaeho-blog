import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID,
    measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
    databaseUrl: process.env.REACT_APP_FB_DATABASE_URL
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function googleSignIn () {
    signInWithPopup(auth, provider).then((result) => {
        // This gives you a Google Access Token. You can use in to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        console.log("result", result)
        console.log("credential", credential)
        localStorage.setItem("user", JSON.stringify({token: token}))
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    })
}

