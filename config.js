require('@firebase/firestore')
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3Dsh5MI_CaQ2gu3RC0qHQHLlHx6-oa7M",
    authDomain: "to-do-app-27eca.firebaseapp.com",
    projectId: "to-do-app-27eca",
    storageBucket: "to-do-app-27eca.appspot.com",
    messagingSenderId: "744973751543",
    appId: "1:744973751543:web:f3c95eab4299d305846ff2"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()