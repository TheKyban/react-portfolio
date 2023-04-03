import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_RrD3tgDzafNkZl4tDsSq6ogrGGImezw",
  authDomain: "aditya-portfolio-3f38c.firebaseapp.com",
  projectId: "aditya-portfolio-3f38c",
  storageBucket: "aditya-portfolio-3f38c.appspot.com",
  messagingSenderId: "980267861638",
  appId: "1:980267861638:web:375fc5272418357206f307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()