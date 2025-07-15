import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq685RYnPHtjeu7pyIkZGh0SCaQc25k_E",
  authDomain: "magneto-3b63f.firebaseapp.com",
  projectId: "magneto-3b63f",
  storageBucket: "magneto-3b63f.appspot.com", // keep this for completeness, but it's not used
  messagingSenderId: "136822317998",
  appId: "1:136822317998:web:c1f979f706436b3953de3f",
  measurementId: "G-JWD984L987",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
