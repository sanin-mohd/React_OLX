import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAY4xEMtUo9wHX2f0L105scmQYBGl9sIfQ",
    authDomain: "olxclone-67ac3.firebaseapp.com",
    projectId: "olxclone-67ac3",
    storageBucket: "olxclone-67ac3.appspot.com",
    messagingSenderId: "128174496136",
    appId: "1:128174496136:web:42ebb0bafda1a429a4423d",
    measurementId: "G-FXE49MND8S"
  };

export default firebase.initializeApp(firebaseConfig)
