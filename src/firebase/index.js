import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD9gzVPpAQrJQQh2YiSdlSPJnd2qHzqifo",
  authDomain: "vue-project-27164.firebaseapp.com",
  projectId: "vue-project-27164",
  storageBucket: "vue-project-27164.appspot.com",
  messagingSenderId: "832225206352",
  appId: "1:832225206352:web:955a01444efc5881e33155"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{
    db
}