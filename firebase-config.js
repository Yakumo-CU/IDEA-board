import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhHUallQGv82QyrYTwUUo4113Swb7ZjBg",
  authDomain: "ideaup-957dc.firebaseapp.com",
  projectId: "ideaup-957dc",
  storageBucket: "ideaup-957dc.firebasestorage.app",
  messagingSenderId: "257938876169",
  appId: "1:257938876169:web:158f182a798675802c95d8",
  measurementId: "G-6WP7BD7BC7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
