import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from '../../firebase-config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading,setLoading] = useState(true)
    
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
        
        setUser(loggedInUser)
        setLoading(false)
    })

    const logOut = () => {
        setLoading(true)
       return signOut(auth);
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    useEffect(() => {
        unSubscribe();
    }, [])
    
    const googleUser = () => {
        
        return signInWithPopup(auth, googleProvider)
    }

    const githubUser = () => {
       
        return signInWithPopup(auth, githubProvider)
    }
    const updateProfileUser = (name, photoUrl) => {
        
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL : photoUrl,
        })
    }


    const authInfo = {registerUser,loading, user, logOut, loginUser, googleUser, githubUser,updateProfileUser};


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;