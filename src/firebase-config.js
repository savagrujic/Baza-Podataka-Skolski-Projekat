// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDxASpEbLd_vEuHgMqgIhvzWhBUhTqlCg",
  authDomain: "bazeprojekat-383fa.firebaseapp.com",
  projectId: "bazeprojekat-383fa",
  storageBucket: "bazeprojekat-383fa.firebasestorage.app",
  messagingSenderId: "632914998502",
  appId: "1:632914998502:web:be2db6a0495e02923db727",
  measurementId: "G-E7QBHCR18S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)