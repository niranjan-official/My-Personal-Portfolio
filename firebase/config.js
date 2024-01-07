// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUYqcpYTKeunjW3BURG4gxwWyzB_HdVTY",
  authDomain: "portfolio-4aa24.firebaseapp.com",
  projectId: "portfolio-4aa24",
  storageBucket: "portfolio-4aa24.appspot.com",
  messagingSenderId: "628090298321",
  appId: "1:628090298321:web:598adcf557ddbcd0edcaf0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};