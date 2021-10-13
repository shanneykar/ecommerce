import firebase from "firebase";


const firebaseConfig = {

    apiKey: "AIzaSyCtG8oRssGv9URf1XVDpAKOVwYlxJKL3yM",
  
    authDomain: "ecommerce-da292.firebaseapp.com",
  
    projectId: "ecommerce-da292",
  
    storageBucket: "ecommerce-da292.appspot.com",
  
    messagingSenderId: "560722431751",
  
    appId: "1:560722431751:web:a8e8238a264a4569103fa2",
  
    measurementId: "G-GLTJEQGWED"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth };