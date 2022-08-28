import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "whereiswaldo-57208.firebaseapp.com",
  projectId: "whereiswaldo-57208",
  storageBucket: "whereiswaldo-57208.appspot.com",
  messagingSenderId: "150853177381",
  appId: "1:150853177381:web:9c8d65141e4dc1b5116fcc",
};

const app = initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const db = getFirestore(app);
