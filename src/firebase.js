
import firebase from 'firebase';



console.log("Hello")
console.log(process.env.REACT_APP_APIKEY)
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;
