import React, { createContext } from 'react'
import UseFirebase from '../../Hooks/UserFirebase';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const allContexts = UseFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
