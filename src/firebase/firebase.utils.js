import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCXP-9Txnsmf-LsJ6J-sqeivkutW4SezmA",
  authDomain: "react-shop-db-fc5bf.firebaseapp.com",
  databaseURL: "https://react-shop-db-fc5bf.firebaseio.com",
  projectId: "react-shop-db-fc5bf",
  storageBucket: "react-shop-db-fc5bf.appspot.com",
  messagingSenderId: "142236918472",
  appId: "1:142236918472:web:ff2fbb780028d62e307bfd",
  measurementId: "G-2E47NCTNQD",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();

  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating users", e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
