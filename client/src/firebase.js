// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-38286.firebaseapp.com",
  projectId: "mern-auth-38286",
  storageBucket: "mern-auth-38286.appspot.com",
  messagingSenderId: "474880970180",
  appId: "1:474880970180:web:6584d61494938f1b912891",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
