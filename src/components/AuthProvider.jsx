import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase-config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
        setUser(loggedInUser)
    })

    const logOut = () => {
       return signOut(auth);
    }


    const loginUser = (email, password) => {
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


    const authInfo = {registerUser, user, logOut, loginUser, googleUser, githubUser};


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;