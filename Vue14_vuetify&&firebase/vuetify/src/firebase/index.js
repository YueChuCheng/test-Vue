//設定firebase擋
import firebase from "firebase/app";

let config = {
  apiKey: "AIzaSyBmCbM021uLYjts7EUMNG-kTSe0gyhehqY",
  authDomain: "test2-ef752.firebaseapp.com",
  databaseURL: "https://test2-ef752.firebaseio.com",
  projectId: "test2-ef752",
  storageBucket: "test2-ef752.appspot.com",
  messagingSenderId: "34967876915",
  appId: "1:34967876915:web:4655eff54d7882ed"
  };

  firebase.initializeApp(config);

  window.firebase= firebase;