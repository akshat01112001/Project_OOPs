document.write("<h1>Parking</h1>");
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6kX5I26OVNuFj5Gr_sUhaUtr-pMwtBmQ",
  authDomain: "parking-d7904.firebaseapp.com",
  projectId: "parking-d7904",
  storageBucket: "parking-d7904.appspot.com",
  messagingSenderId: "761890685247",
  appId: "1:761890685247:web:178fe1243ab8248fe1538a",
  measurementId: "G-YTHHRM2W4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);