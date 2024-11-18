import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authData, setAuthData] = useState({ email: '', password: '' });
  
    const setEmail = (email) => {
        setAuthData(prevData => ({ ...prevData, email }));
    };

    const setPassword = (password) => {
        setAuthData(prevData => ({ ...prevData, password }));
    };
  
    return (
      <AuthContext.Provider value={{ authData, setAuthData, setEmail, setPassword }}>
        {children}
      </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
