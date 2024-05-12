// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_LOCAL_ENV_apiKey,
  authDomain: process.env.EXPO_PUBLIC_LOCAL_ENV_authDomain,
  projectId: process.env.EXPO_PUBLIC_LOCAL_ENV_projectId,
  storageBucket: process.env.EXPO_PUBLIC_LOCAL_ENV_storageBucket,
  messagingSenderId: process.env.EXPO_PUBLIC_LOCAL_ENV_messagingSenderId,
  appId: process.env.EXPO_PUBLIC_LOCAL_ENV_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
