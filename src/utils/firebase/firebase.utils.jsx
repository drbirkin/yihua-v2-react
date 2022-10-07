import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCPN8WSYC7wcUwDRP5C1GDBaG30c8Nn_7U',
  authDomain: 'crwn-clothing-db-b7ed4.firebaseapp.com',
  projectId: 'crwn-clothing-db-b7ed4',
  storageBucket: 'crwn-clothing-db-b7ed4.appspot.com',
  messagingSenderId: '164351346468',
  appId: '1:164351346468:web:97c2bc2f2f21d1dd8815b1',
}

// Initialize Firebase
const firebase_App = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (err) {
      console.error(err)
    }
  }

  return userDocRef
}
