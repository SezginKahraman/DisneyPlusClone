import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWH6T0OuqYtU7z1Hqr6AWs3-6_JxAmddE",

  authDomain: "disneyplus-clone-7bf69.firebaseapp.com",

  projectId: "disneyplus-clone-7bf69",

  storageBucket: "disneyplus-clone-7bf69.appspot.com",

  messagingSenderId: "745857769121",

  appId: "1:745857769121:web:ce1b36e53724e613965ae0",

  measurementId: "G-YKE8QP0P94",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db;
