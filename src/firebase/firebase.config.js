// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmSuAmCJoigPx237j7-g6KiXOv3vMmFVY",
  authDomain: "food-store-9c0e0.firebaseapp.com",
  projectId: "food-store-9c0e0",
  storageBucket: "food-store-9c0e0.appspot.com",
  messagingSenderId: "163694971496",
  appId: "1:163694971496:web:cd3f807827c09724c749dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;