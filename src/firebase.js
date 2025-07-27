// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";  
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyA3fUS2lwxGum7X2gp4Nb-G94TfMLgZTK0",
  authDomain: "om-mart-87be1.firebaseapp.com",
  projectId: "om-mart-87be1",
  storageBucket: "om-mart-87be1.firebasestorage.app",
  messagingSenderId: "1005697132887",
  appId: "1:1005697132887:web:b5b17e32031fb4eb923612",
  measurementId: "G-8M7SPKZLRZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}