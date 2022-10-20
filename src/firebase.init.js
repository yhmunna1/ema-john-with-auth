// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAt6jjK1WLJwcj6Vd8dQ7ApUGcUxKiWtU8",
    authDomain: "ema-john-simple-a5f6b.firebaseapp.com",
    projectId: "ema-john-simple-a5f6b",
    storageBucket: "ema-john-simple-a5f6b.appspot.com",
    messagingSenderId: "673797477245",
    appId: "1:673797477245:web:5867df9f3aa07ace2c7214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;