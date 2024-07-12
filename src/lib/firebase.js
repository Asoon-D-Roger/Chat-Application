import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "asoon-chatapp.firebaseapp.com",
  projectId: "asoon-chatapp",
  storageBucket: "asoon-chatapp.appspot.com",
  messagingSenderId: "670725021066",
  appId: "1:670725021066:web:16b98c6ac7e743c1d1fc73",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
