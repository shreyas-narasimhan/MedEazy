// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Initialize the Firebase app with client credentials



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs7TIUgdV-f94vcBunDpAMD3G6UXX4U4w",
  authDomain: "ehealthcare-idt.firebaseapp.com",
  projectId: "ehealthcare-idt",
  storageBucket: "ehealthcare-idt.appspot.com",
  messagingSenderId: "353184009424",
  appId: "1:353184009424:web:0c2c36ad34bd3e207f22d5",
  measurementId: "G-KXDELCD5LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const authority = getAuth(app);



export const auth = getAuth(app);
export const db = getFirestore(app);