import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAz-AwcztmrjWlFLhXlERUoXeBDMakr3U0",
    authDomain: "sample-ec-shop.firebaseapp.com",
    databaseURL: "https://sample-ec-shop.firebaseio.com",
    projectId: "sample-ec-shop",
    storageBucket: "sample-ec-shop.appspot.com",
    messagingSenderId: "768680315606",
    appId: "1:768680315606:web:fec099e30b29b0f9"
  })
}

export default firebase
