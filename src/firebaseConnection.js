import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA3LgGJ66ubw3Jk7BPwqreUHy4H8oLDkt8",
    authDomain: "projetofirebase-f60e4.firebaseapp.com",
    projectId: "projetofirebase-f60e4",
    storageBucket: "projetofirebase-f60e4.appspot.com",
    messagingSenderId: "859493373637",
    appId: "1:859493373637:web:84a262ce28f33a245042ac",
    measurementId: "G-3GC4S3462E"
  };



  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db, auth};