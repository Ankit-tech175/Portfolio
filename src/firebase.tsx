// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMuRRX312mX63wXvlH1YQ9Xsf2ycpuPHY",
  authDomain: "portfolio-129f9.firebaseapp.com",
  projectId: "portfolio-129f9",
  storageBucket: "portfolio-129f9.firebasestorage.app",
  messagingSenderId: "506897746391",
  appId: "1:506897746391:web:e293264dc84e3371fee392",
  measurementId: "G-YWNX2XK2NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);