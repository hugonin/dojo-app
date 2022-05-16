import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCdWKDBY18nUDU_3qZyR9zCK7YBq383T-4",
    authDomain: "thedojoapp-67c51.firebaseapp.com",
    projectId: "thedojoapp-67c51",
    storageBucket: "thedojoapp-67c51.appspot.com",
    messagingSenderId: "575014818729",
    appId: "1:575014818729:web:0dc92ab548c06c89e7eab8"
  };


  //init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }