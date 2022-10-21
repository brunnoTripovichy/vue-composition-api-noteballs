import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeD3M687u3AgUO1tzR5zdmSyscl6VlYBQ",
  authDomain: "noteballs-285ac.firebaseapp.com",
  projectId: "noteballs-285ac",
  storageBucket: "noteballs-285ac.appspot.com",
  messagingSenderId: "782024667655",
  appId: "1:782024667655:web:346547ebd5beb8f2b4f0a2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
