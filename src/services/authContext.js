import React, { createContext, useState, useContext, useEffect } from 'react';
import auth from './authService' ;

const AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function loadFromAuthService() {
        const response = await auth.getCurrentUser()
        if (response) {
            setUser(user);
            setAuthenticated(true)
        }
        setLoading(false)
    }
    loadFromAuthService()
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        setAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useIsAuthenticated() {
  const context = useAuth();
  return context.isAuthenticated;
}
