import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
}
from
"https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxRX9gAx9zkL3P3K7rK9QKfsgtRufZA_E",
  authDomain: "birthday-website-85b3e.firebaseapp.com",
  projectId: "birthday-website-85b3e",
  storageBucket: "birthday-website-85b3e.firebasestorage.app",
  messagingSenderId: "1009777099486",
  appId: "G-X5Z7Z49V64"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  doc,
  setDoc,
  getDoc
};
