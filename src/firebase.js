// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuh6c6paWqtTzys-ffjhO2mgi3YPqORP4",
  authDomain: "data--auth.firebaseapp.com",
  projectId: "data--auth",
  storageBucket: "data--auth.appspot.com",
  messagingSenderId: "694981107506",
  appId: "1:694981107506:web:c89512f18d261077b6412b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app