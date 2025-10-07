// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyCfunNtK5cVFKMvNQ_1q5mZ2qeMKKHgWCg",
authDomain: "nextjs-login-b67d3.firebaseapp.com",
projectId: "nextjs-login-b67d3",
storageBucket: "nextjs-login-b67d3.firebasestorage.app",
messagingSenderId: "887050389655",
appId: "1:887050389655:web:1881e422c1a10ab87d01d2",
measurementId: "G-L9GNHFX703"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
