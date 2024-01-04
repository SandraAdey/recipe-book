// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxBHjsVXQJZ_4K8yltCd3qBvTKdK26IYU",
  authDomain: "recipe-book-9a314.firebaseapp.com",
  projectId: "recipe-book-9a314",
  storageBucket: "recipe-book-9a314.appspot.com",
  messagingSenderId: "450834741051",
  appId: "1:450834741051:web:ab9738ac705f5b7e2ca91e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);