import firebase from 'firebase/compat/app';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAo76CNvJ8Dj5g1oGWSv_4bQMWfP9XofPw",
    authDomain: "test-bf2af.firebaseapp.com",
    projectId: "test-bf2af",
    storageBucket: "test-bf2af.appspot.com",
    messagingSenderId: "148188561977",
    appId: "1:148188561977:web:afe2ca3411f86ed4b0c3e8"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase