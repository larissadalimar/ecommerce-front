import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [token, setToken] = useState("");
    const REACT_APP_API_BASE_URL = "https://vinho-ecommerce.onrender.com";
        
    return (
        <AuthContext.Provider value={{setToken, token, REACT_APP_API_BASE_URL}}>
            {children}
        </AuthContext.Provider>
        
    )
};

export default AuthProvider;