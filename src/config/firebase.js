import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDuoobUG1xNgtDm77l44hAUEBgBdvUwjsw",
  authDomain: "tiktok---clone-4b2e1.firebaseapp.com",
  projectId: "tiktok---clone-4b2e1",
  storageBucket: "tiktok---clone-4b2e1.appspot.com",
  messagingSenderId: "587475603517",
  appId: "1:587475603517:web:c4287e8de3ea7f3e519a54"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;