// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK2G3ntquPfatBeo0HDW4vv6Lc57TPAv0",
    authDomain: "laptop-werehouse-management.firebaseapp.com",
    projectId: "laptop-werehouse-management",
    storageBucket: "laptop-werehouse-management.appspot.com",
    messagingSenderId: "504680986965",
    appId: "1:504680986965:web:455240d452383b4b0557dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;