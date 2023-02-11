import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMd-L8atY2yayTtveNPkzEYcSGCimZ71Y",
  authDomain: "chatgpt-vc.firebaseapp.com",
  projectId: "chatgpt-vc",
  storageBucket: "chatgpt-vc.appspot.com",
  messagingSenderId: "19675425970",
  appId: "1:19675425970:web:cc72e2a57b78734a6d2dab",
};

// Initialize Firebase
const app = getApps?.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
