import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDYxqQK0qmJzamoY_e5OjkkG8UC9V4XRh4",
    authDomain: "post-my-thought.firebaseapp.com",
    databaseURL: "https://post-my-thought.firebaseio.com",
    projectId: "post-my-thought",
    storageBucket: "post-my-thought.appspot.com",
    messagingSenderId: "609553640298",
    appId: "1:609553640298:web:6f24e7450220cdedf6d313",
    measurementId: "G-PMWLYXHMED",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
