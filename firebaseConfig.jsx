// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9a0tu_YpgYcnAKnlRkNZJVvYLKIMAUaA",
  authDomain: "instaa-2050a.firebaseapp.com",
  projectId: "instaa-2050a",
  storageBucket: "instaa-2050a.firebasestorage.app",
  messagingSenderId: "845906381060",
  appId: "1:845906381060:web:0892b1ea1412334916e851",
  measurementId: "G-9CW396X90Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);