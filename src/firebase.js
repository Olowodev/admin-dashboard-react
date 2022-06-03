// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3c3N17LEWU2sC_c3Q0sktSBufded13EI",
  authDomain: "thedecalmasters-7c1ca.firebaseapp.com",
  projectId: "thedecalmasters-7c1ca",
  storageBucket: "thedecalmasters-7c1ca.appspot.com",
  messagingSenderId: "821796009086",
  appId: "1:821796009086:web:dfdac5ced3c8402d1c542f",
  measurementId: "G-XQH07P6S00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;