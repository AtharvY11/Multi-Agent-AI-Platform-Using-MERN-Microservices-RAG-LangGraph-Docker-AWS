// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexdemo-c20fc.firebaseapp.com",
  projectId: "cortexdemo-c20fc",
  storageBucket: "cortexdemo-c20fc.firebasestorage.app",
  messagingSenderId: "717422739550",
  appId: "1:717422739550:web:6357c19944dbd9278d74cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()