import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"; 


const firebaseConfig = {
  apiKey: "AIzaSyDAZ5g-Tz7MKKyjZTnB4lFox7-f8XTuqb4",
  authDomain: "alternance-test.firebaseapp.com",
  projectId: "alternance-test",
  storageBucket: "alternance-test.appspot.com",
  messagingSenderId: "682598389187",
  appId: "1:682598389187:web:09d46640ee22d2d9181976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);