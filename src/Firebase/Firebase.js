
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


// const firebaseConfig = {
//   apiKey: "AIzaSyD5gIsABMq0jUp0qyTZSt9OfOEw92A-iZ8",
//   authDomain: "healthgenie-e52a6.firebaseapp.com",
//   projectId: "healthgenie-e52a6",
//   storageBucket: "healthgenie-e52a6.firebasestorage.app",
//   messagingSenderId: "422377768479",
//   appId: "1:422377768479:web:41c09beb529000804bf72a",
//   measurementId: "G-BW8SHPV1NG"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();

export{app,auth,googleProvider};