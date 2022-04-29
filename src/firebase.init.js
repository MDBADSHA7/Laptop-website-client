// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtoyZKXXmnrLZ_6hFP5ru-S-_ZR9CFCn8",
    authDomain: "laptop-werehouse-website.firebaseapp.com",
    projectId: "laptop-werehouse-website",
    storageBucket: "laptop-werehouse-website.appspot.com",
    messagingSenderId: "729787618935",
    appId: "1:729787618935:web:3ec0424a99396d88111872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;