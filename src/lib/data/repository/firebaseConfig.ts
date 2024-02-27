// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBahR6pvtF3NtO3DsbWROTJbitc9mI1MTU",
    authDomain: "ecommerse-ddb07.firebaseapp.com",
    projectId: "ecommerse-ddb07",
    storageBucket: "ecommerse-ddb07.appspot.com",
    messagingSenderId: "313362314242",
    appId: "1:313362314242:web:3f87efe4a121bf4b77e31b"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };