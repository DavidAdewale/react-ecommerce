import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyDsXZoNCIeO30ziePrMwyx-TwNCjjulib4',
  authDomain: 'ecommerce-12085.firebaseapp.com',
  projectId: 'ecommerce-12085',
  storageBucket: 'ecommerce-12085.appspot.com',
  messagingSenderId: '728686647472',
  appId: '1:728686647472:web:fc7fd6519d2dec792e0375',
  measurementId: 'G-5CMEZTMCQC',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
