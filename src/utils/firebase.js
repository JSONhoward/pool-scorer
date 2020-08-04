import firebase from 'firebase/app'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyAwriuA_z6BH8aCqtKz4TAaInw3wyFEQhE",
    authDomain: "pool-scorer.firebaseapp.com",
    databaseURL: "https://pool-scorer.firebaseio.com",
    projectId: "pool-scorer",
    storageBucket: "pool-scorer.appspot.com",
    messagingSenderId: "411177194065",
    appId: "1:411177194065:web:4bfe0ab0132bea7c9a1e70",
    measurementId: "G-6DYPVSGFG4"
  }

firebase.initializeApp(firebaseConfig)
firebase.analytics()