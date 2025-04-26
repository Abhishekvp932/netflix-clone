import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAA_kWRrgjIQU3nQN_D-p7YoaI852JBkSs",
  authDomain: "netflix-clone-26d83.firebaseapp.com",
  projectId: "netflix-clone-26d83",
  storageBucket: "netflix-clone-26d83.firebasestorage.app",
  messagingSenderId: "281246467812",
  appId: "1:281246467812:web:b15b9bd6a3b16cee284ef1",
  measurementId: "G-RLZXPYBFRE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};
 


const login = async (email,password)=>{
            try{
                await signInWithEmailAndPassword(auth,email,password)
            }catch(error){
                console.log(error)
                toast.error(error.code.split('/')[1].split('-').join(" "));
            }
}

const logout=()=>{
signOut(auth)
}


export {auth,db,login,signUp,logout}