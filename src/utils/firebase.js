import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API,
  authDomain: "portfolio-cb13b.firebaseapp.com",
  projectId: "portfolio-cb13b",
  storageBucket: "portfolio-cb13b.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db};