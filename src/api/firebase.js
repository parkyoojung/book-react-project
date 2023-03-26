import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZyN0ckHIKZDZ4NZyq_jxw36Hany-GaxQ",
  authDomain: "book-ee913.firebaseapp.com",
  databaseURL: "https://book-ee913-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "book-ee913",
  storageBucket: "book-ee913.appspot.com",
  messagingSenderId: "60570852542",
  appId: "1:60570852542:web:146616094e4df3aa2192ef",
  measurementId: "G-5JMCCL8DD8"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 로그인
export async function login (){
  return signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    return user;
  })
  .catch(console.error);
}
// 로그아웃
export async function logout (){
  return signOut().then(()=>null);
}
// 로그인상태
export function onUserState (callback){
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    callback(user)
  })
}



// REACT_APP_FIREBASE_API_KEY=AIzaSyCZyN0ckHIKZDZ4NZyq_jxw36Hany-GaxQ
// REACT_APP_FIREBASE_AUTH_DOMAIN=book-ee913.firebaseapp.com
// REACT_APP_FIREBASE_DATABASE_URL=https://book-ee913-default-rtdb.asia-southeast1.firebasedatabase.app
// REACT_APP_FIREBASE_PROJECT_ID=book-ee913
// REACT_APP_FIREBASE_APP_ID=1:60570852542:web:146616094e4df3aa2192ef