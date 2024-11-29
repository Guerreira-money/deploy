import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import dotenv from "dotenv";

dotenv.config();



export const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  measurementId: process.env.MEASUREMENTID,
  appId: process.env.APPID
}
export const app = initializeApp(firebaseConfig);


// Inicializar Cloud Firestore e autenticação
export const db = getFirestore(app);
export const auth = getAuth(app);

