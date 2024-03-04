// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYDXK2y8KxPZ4lK8tfCJD-8Zbnn-yHNmw",
  authDomain: "twitter-ed16a.firebaseapp.com",
  projectId: "twitter-ed16a",
  storageBucket: "twitter-ed16a.appspot.com",
  messagingSenderId: "21315023261",
  appId: "1:21315023261:web:833dd2d68dab18e4fbbf74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);