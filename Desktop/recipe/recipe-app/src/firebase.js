import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkr6vgmzRKMBs32o_PSNbspM1Gopolb-g",
  authDomain: "recipe-app-aa695.firebaseapp.com",
  projectId: "recipe-app-aa695",
  storageBucket: "recipe-app-aa695.appspot.com",
  messagingSenderId: "36372314908",
  appId: "1:36372314908:web:b33d97949554ad696698d9",
  measurementId: "G-Y7KK2ZSHN9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;