import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBa683YxUiZxqVF0JNqy_ZjITRlCY9K-wQ",
  authDomain: "clone-73255.firebaseapp.com",
  databaseURL: "https://clone-73255.firebaseio.com",
  projectId: "clone-73255",
  storageBucket: "clone-73255.appspot.com",
  messagingSenderId: "176064238216",
  appId: "1:176064238216:web:060ec06217218d8841053d",
  measurementId: "G-GSPKSGRG2K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
