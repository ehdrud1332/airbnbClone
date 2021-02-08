import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBSlLslNeLJ6nEl5Mkz5xSJXiz2oCpdWgA",
    authDomain: "emailauth-53cb3.firebaseapp.com",
    projectId: "emailauth-53cb3",
    storageBucket: "emailauth-53cb3.appspot.com",
    messagingSenderId: "828533171766",
    appId: "1:828533171766:web:e0e5f4908086e85db4da97",
    measurementId: "G-C7XHLVPVRL"
};

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase;