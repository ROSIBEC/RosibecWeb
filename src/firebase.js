// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyARjAkX-WndtvbPsUAX2eh5zgdp4JA3fvM",
  authDomain: "rosibec-7c37d.firebaseapp.com",
  projectId: "rosibec-7c37d",
  storageBucket: "rosibec-7c37d.firebasestorage.app",
  messagingSenderId: "585949345956",
  appId: "1:585949345956:web:6e49bb31e4fc2175720e31",
  measurementId: "G-0YVRDYF8MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);