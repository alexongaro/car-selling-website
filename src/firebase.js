// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_TKcwOOzMZmK7qbgdDVsDdV8FHN0sGDo",
  authDomain: "keep-a3551.firebaseapp.com",
  projectId: "keep-a3551",
  storageBucket: "keep-a3551.appspot.com",
  messagingSenderId: "416943501107",
  appId: "1:416943501107:web:fb187f06e0f916b046d846"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
