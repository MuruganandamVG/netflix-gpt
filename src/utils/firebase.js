// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDslLgpRjg89I-8iGTer1pZcPgVHh4ypec",
  authDomain: "netflixgpt-81249.firebaseapp.com",
  projectId: "netflixgpt-81249",
  storageBucket: "netflixgpt-81249.appspot.com",
  messagingSenderId: "1052157455152",
  appId: "1:1052157455152:web:96ea8d7abea80fd249b6f5",
  measurementId: "G-VXZ3HGQBJC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
