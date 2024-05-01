// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqNt6eptWtE59IpLX73Qs5sLP3OJpgbAw",
  authDomain: "mrmealbd-5b438.firebaseapp.com",
  projectId: "mrmealbd-5b438",
  storageBucket: "mrmealbd-5b438.appspot.com",
  messagingSenderId: "64572416181",
  appId: "1:64572416181:web:a05d7c16d2a88094cd1efc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
