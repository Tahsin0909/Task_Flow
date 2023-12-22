// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_9_NV_k9JKsyJvxFNBep5sML6keM1qUY",
  authDomain: "taskflow-b08b6.firebaseapp.com",
  projectId: "taskflow-b08b6",
  storageBucket: "taskflow-b08b6.appspot.com",
  messagingSenderId: "542174451191",
  appId: "1:542174451191:web:6d2d58803c44edcb5a4af2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;