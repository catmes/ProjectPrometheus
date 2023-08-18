import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCnGSEx5FHysjEeFcyaHN0slwYbbIghi_M",
    authDomain: "nextfire-app-5bdbd.firebaseapp.com",
    projectId: "nextfire-app-5bdbd",
    storageBucket: "nextfire-app-5bdbd.appspot.com",
    messagingSenderId: "417928314472",
    appId: "1:417928314472:web:25e694da1a5afa94a105dd"
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export const firestore = firebase.firestore()
  export const storage = firebase.storage()