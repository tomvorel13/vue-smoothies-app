import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDQFdS4Xp-QeMPen0ist8rf9TorRefy2XQ',
  authDomain: 'ninja-smoothies-304f1.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-304f1.firebaseio.com',
  projectId: 'ninja-smoothies-304f1',
  storageBucket: 'ninja-smoothies-304f1.appspot.com',
  messagingSenderId: '549094984486'
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firebase database
export default firebaseApp.firestore()
