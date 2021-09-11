import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBeUqQ_EPepK3u_-iayR-jaaEHE_j22_kc",
  authDomain: "slack-clone-31831.firebaseapp.com",
  projectId: "slack-clone-31831",
  storageBucket: "slack-clone-31831.appspot.com",
  messagingSenderId: "1011259160841",
  appId: "1:1011259160841:web:9f12222c9517431ea43bd8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };