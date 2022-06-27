import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAapB6vPscR1CMEoFJ85gU8xxM7vK9Y2js",
  authDomain: "upload-image-d2e27.firebaseapp.com",
  projectId: "upload-image-d2e27",
  storageBucket: "upload-image-d2e27.appspot.com",
  messagingSenderId: "862880575638",
  appId: "1:862880575638:web:886c08525073a43cdfd2b7",
  measurementId: "G-2DPNVB8NGP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };