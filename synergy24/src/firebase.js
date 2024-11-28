import { initializeApp, getApp, getApps } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBWSQ0-I7t7JMGY9YDkdx1zita5ekNaxnU",
  authDomain: "medtech-3ff14.firebaseapp.com",
  projectId: "medtech-3ff14",
  storageBucket: "medtech-3ff14.firebasestorage.app",
  messagingSenderId: "488606722709",
  appId: "1:488606722709:web:4e91662d4b06442e6d499c",
};

// Check if Firebase app is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

const singup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    // Improved error handling
    if (error.code) {
      const errorMessage = error.code.replace("auth/", "").split("-").join(" ");
      toast.error(errorMessage);
    } else {
      toast.error("An unknown error occurred. Please try again.");
    }
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    // Improved error handling
    if (error.code) {
      const errorMessage = error.code.replace("auth/", "").split("-").join(" ");
      toast.error(errorMessage);
    } else {
      toast.error("An unknown error occurred. Please try again.");
    }
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, singup, logout };
