// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBrBCG1zvbOPUPxY3vqvdm9V_a-E6hm5Rg",
  authDomain: "arquetype-quest.firebaseapp.com",
  projectId: "arquetype-quest",
  storageBucket: "arquetype-quest.firebasestorage.app",
  messagingSenderId: "726322815585",
  appId: "1:726322815585:web:9998a2b9384195a82fc020"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };