import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiLAWdnLmweHg_XemaxTmcgBaWhVC_J-c",
  authDomain: "gridz-3e12d.firebaseapp.com",
  databaseURL: "https://gridz-3e12d.firebaseio.com",
  projectId: "gridz-3e12d",
  storageBucket: "gridz-3e12d.appspot.com",
  messagingSenderId: "889370390015",
  appId: "1:889370390015:web:d5258f39e8899bce"
};

firebase.initializeApp(firebaseConfig);
// database
export const firestore = firebase.firestore();
// storage
export const firebaseStorage = firebase.storage();
