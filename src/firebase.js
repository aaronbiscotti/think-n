// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVksEmnVqJeosImG-RrPnD8jaiw-Mk81M",
  authDomain: "think-n.firebaseapp.com",
  projectId: "think-n",
  storageBucket: "think-n.appspot.com",
  messagingSenderId: "571185753164",
  appId: "1:571185753164:web:ad6bf1d10ced135fd7d8e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app