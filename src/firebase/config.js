import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKj6z_jS6liVqe7aTEEPEns4csxEI6rcI",
    authDomain: "ecommerce-coder-house-f4f7b.firebaseapp.com",
    projectId: "ecommerce-coder-house-f4f7b",
    storageBucket: "ecommerce-coder-house-f4f7b.appspot.com",
    messagingSenderId: "1042822920528",
    appId: "1:1042822920528:web:706fd8cc1d93a59f72d455"
  };
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app;
};

export const getFirestore = () => {
    return firebase.firestore(app);
};