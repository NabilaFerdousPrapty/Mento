// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getFirestore } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdWJM_clIye48LjVZ2O6N58405JFVWQTU",
  authDomain: "mentoaiproductivitytool.firebaseapp.com",
  projectId: "mentoaiproductivitytool",
  storageBucket: "mentoaiproductivitytool.firebasestorage.app",
  messagingSenderId: "911344085584",
  appId: "1:911344085584:web:de12d54cbcbc64202eff55"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore(app);
export { db };