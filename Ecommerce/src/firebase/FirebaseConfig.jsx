import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmcN7EG1aJr1jHH8bfz_Cr2moHrxkHHBE",
  authDomain: "shopnest-8215a.firebaseapp.com",
  projectId: "shopnest-8215a",
  storageBucket: "shopnest-8215a.appspot.com",
  messagingSenderId: "585178909725",
  appId: "1:585178909725:web:cfac9d4b73a168fdc00af4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth } ;

