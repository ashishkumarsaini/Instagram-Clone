import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
    // for using the current User from authProvider
    return useContext(AuthContext)
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsusbcribe = auth.onAuthStateChanged((user) => {
            console.log(user)
            if(user){
                setCurrentUser(user);
            };
        });
        return unsusbcribe;
    });

    const value = {
        currentUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};