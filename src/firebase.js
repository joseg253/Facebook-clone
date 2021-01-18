import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "fb-clone-d3966.firebaseapp.com",
  databaseURL: "https://fb-clone-d3966.firebaseio.com",
  projectId: "fb-clone-d3966",
  storageBucket: "fb-clone-d3966.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-8JHBFTXD5Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
