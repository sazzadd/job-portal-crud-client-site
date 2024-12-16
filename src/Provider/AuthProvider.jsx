import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
// const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };
  const authInfo = {
    user,
    loading,
    setUser,
    createNewUser,
    userLogin,
    GoogleLogin,
    handleLogOut,
    updateUserProfile,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state capture ", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios.post("http://localhost:5000/jwt", user, { withCredentials: true 

        })
          .then((res) => {
            
            console.log(res.data);
            setLoading(false);
          });
      }
      else{
        axios.post("http://localhost:5000/logout", {},{
          withCredentials: true 
        })
        .then((res) => {
          console.log("logout",res.data)
          setLoading(false);

        });
      }


      // setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
