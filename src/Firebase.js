// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdhLdqsLURtjndRAHSste5SyPw70fFL_4",
  authDomain: "react-app-a89f6.firebaseapp.com",
  projectId: "react-app-a89f6",
  storageBucket: "react-app-a89f6.appspot.com",
  messagingSenderId: "406635624211",
  appId: "1:406635624211:web:f49e2d3ce2174bae6f8ce6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
