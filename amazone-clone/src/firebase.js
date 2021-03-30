import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGoTcGtDpItradvDv3_rK5LWJeifcpK44",
  authDomain: "e-clone-study.firebaseapp.com",
  projectId: "e-clone-study",
  storageBucket: "e-clone-study.appspot.com",
  messagingSenderId: "136418635104",
  appId: "1:136418635104:web:1ae9566188015c4eb6c205",
  measurementId: "G-8L3C6WXDDH",
});


const auth = firebase.auth();

export { auth };



