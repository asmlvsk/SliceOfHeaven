// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig ={
    apiKey: "AIzaSyDAHHW_J7S28YBIDYTGPvY-N9NjH822l6o",
    authDomain: "sliceofheaven-330314.firebaseapp.com",
    databaseURL: "https://sliceofheaven-330314-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sliceofheaven-330314",
    storageBucket: "sliceofheaven-330314.appspot.com",
    messagingSenderId: "755990048933",
    appId: "1:755990048933:web:4b5842cbe13e4d4fa99d4c",
    measurementId: "G-YFNFVFYJ5P"
};

initializeApp(firebaseConfig);
export default getFirestore();