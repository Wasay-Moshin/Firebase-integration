// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCks9RoEUDxCRh9-LMmgP79o67IMtVlJow",
  authDomain: "react-firebase-auth-844bc.firebaseapp.com",
  projectId: "react-firebase-auth-844bc",
  storageBucket: "react-firebase-auth-844bc.appspot.com",
  messagingSenderId: "139612606473",
  appId: "1:139612606473:web:2102e6712bfd984ab2a8d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;


