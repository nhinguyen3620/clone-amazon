import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCaW0tGjq2ZkfdtWbpZvQaret-D82vBH9o",
    authDomain: "clone-56329.firebaseapp.com",
    projectId: "clone-56329",
    storageBucket: "clone-56329.appspot.com",
    messagingSenderId: "105464915134",
    appId: "1:105464915134:web:af1cf57f87a40a2a816aef",
    measurementId: "G-Y5B11JSWEE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
