import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBI_UrIS7HsDC3_iHeccIBizVq3BwxLk9Q",
    authDomain: "lucky-trail-339607.firebaseapp.com",
    projectId: "lucky-trail-339607",
    storageBucket: "lucky-trail-339607.appspot.com",
    messagingSenderId: "206166835095",
    appId: "1:206166835095:web:8194a23b458ffaa8698ed2",
    measurementId: "G-6YG1BXY8X9"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;