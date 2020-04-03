import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyADUDYUon1JF4DtX1J_JGL2fPEny9DN0To",
    authDomain: "crown-db-94c39.firebaseapp.com",
    databaseURL: "https://crown-db-94c39.firebaseio.com",
    projectId: "crown-db-94c39",
    storageBucket: "crown-db-94c39.appspot.com",
    messagingSenderId: "254163654348",
    appId: "1:254163654348:web:bb99e8146948c2b3595469",
    measurementId: "G-YE877P581R"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
