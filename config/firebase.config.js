// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhz8IA-jC-c88E4LJ8D67SZ6cgoZU2XN4",
  authDomain: "unipeers-1bdd5.firebaseapp.com",
  projectId: "unipeers-1bdd5",
  storageBucket: "unipeers-1bdd5.firebasestorage.app",
  messagingSenderId: "623730977270",
  appId: "1:623730977270:web:7d45ffa5a9fa3d9b46ffd7"
};

// Initialize Firebase
const app = getApps.length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
