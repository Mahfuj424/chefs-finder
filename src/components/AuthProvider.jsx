import React, { Children, createContext } from 'react';

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const authInfo = {};

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;