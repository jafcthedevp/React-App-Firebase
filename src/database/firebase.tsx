import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyC0IxMdKkcYvP_ale-dX8M-DUS33uhkVlE",
  authDomain: "app-movile-393c5.firebaseapp.com",
  projectId: "app-movile-393c5",
  storageBucket: "app-movile-393c5.appspot.com",
  messagingSenderId: "943694142491",
  appId: "1:943694142491:web:92e435bde0a846d9632cbe"  
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);