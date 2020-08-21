 // Your web app's Firebase configuration
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyCXJAkicz2r8S3HeGoXKCNhDuswiJO2e1k",
    authDomain: "daniel-firegram.firebaseapp.com",
    databaseURL: "https://daniel-firegram.firebaseio.com",
    projectId: "daniel-firegram",
    storageBucket: "daniel-firegram.appspot.com",
    messagingSenderId: "585410696959",
    appId: "1:585410696959:web:9f07ab6b9382c0d456deca"
  };
  // Initialize Firebase
 
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };