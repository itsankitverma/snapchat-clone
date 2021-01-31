import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_rlshHN-w9GqwKzei1iLe824KClEhTZg",
  authDomain: "snapchat-clone-b309f.firebaseapp.com",
  projectId: "snapchat-clone-b309f",
  storageBucket: "snapchat-clone-b309f.appspot.com",
  messagingSenderId: "206054581161",
  appId: "1:206054581161:web:ade20c7301cb0688c21ab8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
