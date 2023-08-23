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

  export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED

  export const fromMillis = firebase.firestore.Timestamp.fromMillis
  export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp
  export const increment = firebase.firestore.FieldValue.increment

  //// Helper functions

  /**
   *  Gets a users/{uid} document with username
   *  @param {string} username
   */
  export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users')
    const query = usersRef.where('username', '==', username).limit(1)
    const userDoc = (await query.get()).docs[0]
    return userDoc    
  }

  /**
   *  Converts a firestore document to JSON
   *  @param {DocumentSnapshot} doc
   */
  export function postToJSON(doc) {
    const data = doc.data()
    return {
      ...data,
      // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
      createdAt: data.createdAt.toMillis(),
      updatedAt: data.updatedAt.toMillis(),
    }
  }