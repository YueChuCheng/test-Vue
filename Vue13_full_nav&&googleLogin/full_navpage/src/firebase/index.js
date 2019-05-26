//設定firebase擋
import firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyBddvB1E25xw00OKuCqF5lUpQB_YMqu9qw",
    authDomain: "test-vue-firebase-a3916.firebaseapp.com",
    databaseURL: "https://test-vue-firebase-a3916.firebaseio.com",
    projectId: "test-vue-firebase-a3916",
    storageBucket: "test-vue-firebase-a3916.appspot.com",
    messagingSenderId: "999039180624",
    appId: "1:999039180624:web:2f0a7633d8f00e8a"
  };

  firebase.initializeApp(config);

  window.firebase= firebase;