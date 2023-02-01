// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDFQCZp4mxaanV-eFjQ4TQ8i2HoJkP9BNA",
//   authDomain: "netflix-clone-c0e79.firebaseapp.com",
//   projectId: "netflix-clone-c0e79",
//   storageBucket: "netflix-clone-c0e79.appspot.com",
//   messagingSenderId: "291868341843",
//   appId: "1:291868341843:web:2fb4535ff66a6d164af8a6",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

//////////////////////////////////////////////////////////////////////

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFQCZp4mxaanV-eFjQ4TQ8i2HoJkP9BNA",
  authDomain: "netflix-clone-c0e79.firebaseapp.com",
  projectId: "netflix-clone-c0e79",
  storageBucket: "netflix-clone-c0e79.appspot.com",
  messagingSenderId: "291868341843",
  appId: "1:291868341843:web:2fb4535ff66a6d164af8a6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
