// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhON9TeGYW20XVt6aZUmSwuZ6XikMyf3c",
  authDomain: "netflixgpt-bb605.firebaseapp.com",
  projectId: "netflixgpt-bb605",
  storageBucket: "netflixgpt-bb605.firebasestorage.app",
  messagingSenderId: "1001600521210",
  appId: "1:1001600521210:web:d48c4ccec939302aae8a43",
  measurementId: "G-DTL2HLHHB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
