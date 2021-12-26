import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  
    apiKey: "AIzaSyAW6oWoymvVw2oEFvrRuRUkrY0dSE7_YrM",
    authDomain: "wily-app-20d0e.firebaseapp.com",
    databaseURL: "https://wily-app-20d0e.firebaseio.com",
    projectId: "wily-app-20d0e",
    storageBucket: "wily-app-20d0e.appspot.com",
    messagingSenderId: "69453474026",
    appId: "1:69453474026:web:236c8ed068b415c9698f93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();