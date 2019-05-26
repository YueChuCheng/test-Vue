//設定firebase擋
import firebase from "firebase/app";

let config = {
  apiKey: "AIzaSyB3trr1732kgKhH5hO85h_XCs1wT091LtE",
  authDomain: "test-bed31.firebaseapp.com",
  databaseURL: "https://test-bed31.firebaseio.com",
  projectId: "test-bed31",
  storageBucket: "test-bed31.appspot.com",
  messagingSenderId: "428314044312",
  appId: "1:428314044312:web:322fdd9eadd2ef47"
  };

  firebase.initializeApp(config);

  window.firebase= firebase;