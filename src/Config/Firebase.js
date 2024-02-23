// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2s7g7X72FA2glIeaqKHfdbBy3CC-DG8I",
  authDomain: "travel-d264b.firebaseapp.com",
  projectId: "travel-d264b",
  storageBucket: "travel-d264b.appspot.com",
  messagingSenderId: "967011680730",
  appId: "1:967011680730:web:2c0f9e2807e1f3d06880e3",
  measurementId: "G-F2X7VLE8Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
