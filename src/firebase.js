// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqw1WmV_ynVwKe5c_2UpukkYe1rGJ5yTI",
  authDomain: "levl-9b84e.firebaseapp.com",
  projectId: "levl-9b84e",
  storageBucket: "levl-9b84e.appspot.com",
  messagingSenderId: "480147930200",
  appId: "1:480147930200:web:f44a58cfb45d2d1e245e2d",
  measurementId: "G-L12B3VM455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);