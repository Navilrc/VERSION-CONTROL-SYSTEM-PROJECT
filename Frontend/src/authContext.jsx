import React, { createContext, useState, useEffect, useContext  } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentuser, setcurrentUser] = useState(null);
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            setCurrentUser({ userId });
        }
    }, []);

    const value={
        currentuser,
        setcurrentUser
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}