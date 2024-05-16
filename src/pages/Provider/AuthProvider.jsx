import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [users, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const provider = new GoogleAuthProvider();

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const login = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
   };

   const handleGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, provider);
   };
   const logOut = () =>{
      return signOut(auth)
   }

   useEffect( ()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser);
         setLoading(false)
      })
      return () =>{
         return unsubscribe();
      }
   },[])

   const userInfo = {
      users,
      setUser,
      loading,
      setLoading,
      createUser,
      login,
      handleGoogle,
      logOut,
   };
   return <authContext.Provider value={userInfo}>{children}</authContext.Provider>;
};

export default AuthProvider;
