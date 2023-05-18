import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBmM8nIPrwMAZQniYb7E1wRt5Ak1RnBB0E",
    authDomain: "edrus-lms.firebaseapp.com",
    projectId: "edrus-lms",
    storageBucket: "edrus-lms.appspot.com",
    messagingSenderId: "972797310737",
    appId: "1:972797310737:web:f6521a3db5452b41597eb0",
    measurementId: "G-1GXTXGDYG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authFirebase = getAuth()
const db = getFirestore(app)
const storage = getStorage(app)

export { authFirebase, app, db, storage }