import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAfpWOSwqT8gKaNDNrKaCheXXMxBJcRKY4",
  authDomain: "booksanta-ded78.firebaseapp.com",
  projectId: "booksanta-ded78",
  storageBucket: "booksanta-ded78.appspot.com",
  messagingSenderId: "321375996840",
  appId: "1:321375996840:web:54e2fd5cf903b2fb2cab9d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
