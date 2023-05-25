import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqJJC1Bq5FrZrcwJ-1CESJoAWy1cW0bXo",
  authDomain: "chebon-3ceb9.firebaseapp.com",
  projectId: "chebon-3ceb9",
  storageBucket: "chebon-3ceb9.appspot.com",
  messagingSenderId: "562173893857",
  appId: "1:562173893857:web:c5a13cdd52ddb5be516ba0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
