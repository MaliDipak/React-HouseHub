// user id : PDeqefyUd3bmH9CPrDyzCNhpXA72

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0B_BjtKTfsmOJzmsvF5XJAWOoTBW8n9Y",
  authDomain: "react-house-15955.firebaseapp.com",
  projectId: "react-house-15955",
  storageBucket: "react-house-15955.appspot.com",
  messagingSenderId: "717174983909",
  appId: "1:717174983909:web:125d05f2bdc790db05580c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
