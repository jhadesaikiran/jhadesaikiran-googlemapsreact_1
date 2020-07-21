import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDO2VURI8kcSmSJZsRehZvBnzo6PT5aZ1s",
  authDomain: "startup-priority.firebaseapp.com",
  databaseURL: "https://startup-priority.firebaseio.com",
  projectId: "startup-priority",
  storageBucket: "startup-priority.appspot.com",
  messagingSenderId: "236998381584",
  appId: "1:236998381584:web:64bdc65bba263a89223a95",
  measurementId: "G-2EG5LTX7PH",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
