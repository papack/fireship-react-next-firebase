import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjTGPt4SGOg4JA76sh8N-b7ql6mLJOUmk",
  authDomain: "firebse-practice-c3a82.firebaseapp.com",
  projectId: "firebse-practice-c3a82",
  storageBucket: "firebse-practice-c3a82.appspot.com",
  messagingSenderId: "340898274605",
  appId: "1:340898274605:web:520e7e3896238fde5907a4",
  measurementId: "G-W13ZPKWW90",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
