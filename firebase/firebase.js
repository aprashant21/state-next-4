// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkRAzybsE9C8rTxfVzsNWuggCu3sY09Io",
  authDomain: "state-redux.firebaseapp.com",
  projectId: "state-redux",
  storageBucket: "state-redux.appspot.com",
  messagingSenderId: "35265825500",
  appId: "1:35265825500:web:8b1495e9b3bf04e0394219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
