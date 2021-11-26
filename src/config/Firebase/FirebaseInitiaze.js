// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

function FirebaseInitiaze() {
    // Initialize Firebase
    initializeApp(firebaseConfig);
}

export default FirebaseInitiaze;
