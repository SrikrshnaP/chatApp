// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHGkwRUSV6ag0fCjsljvvMz1LfVHvD-O4",
    authDomain: "eavesdropdatabase.firebaseapp.com",
    projectId: "eavesdropdatabase",
    storageBucket: "eavesdropdatabase.appspot.com",
    messagingSenderId: "408135517890",
    appId: "1:408135517890:web:696011454c3808e75fdd5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);