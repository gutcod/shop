import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXP-9Txnsmf-LsJ6J-sqeivkutW4SezmA",
    authDomain: "react-shop-db-fc5bf.firebaseapp.com",
    databaseURL: "https://react-shop-db-fc5bf.firebaseio.com",
    projectId: "react-shop-db-fc5bf",
    storageBucket: "react-shop-db-fc5bf.appspot.com",
    messagingSenderId: "142236918472",
    appId: "1:142236918472:web:ff2fbb780028d62e307bfd",
    measurementId: "G-2E47NCTNQD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;