import { useContext, useState, createContext, useEffect } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";

// import { useState } from "react";
// inport { createContext } from "react";

//Create context
const AuthContext = createContext();
//Provide context
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Sign-in with Google
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    //Signout
    const logout = () => signOut(auth);

    const value = {
        currentUser, 
        setCurrentUser,
        signinWithGoogle,
        logout
    }

    //set current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}