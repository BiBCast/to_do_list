// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeau47Q6xXxIv_Ggy8eS4tPubE8nQ0EX0",
  authDomain: "to-do-list-78cb3.firebaseapp.com",
  projectId: "to-do-list-78cb3",
  storageBucket: "to-do-list-78cb3.appspot.com",
  messagingSenderId: "421781273563",
  appId: "1:421781273563:web:c203818e928011947545fe",
  measurementId: "G-GJTFXJLELQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
