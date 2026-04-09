import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const authStatus = sessionStorage.getItem('isLoggedIn');
    
    if (storedUser && authStatus === 'true') {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const signup = (userData) => {
    sessionStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      sessionStorage.setItem('isLoggedIn', 'true');
      setUser(storedUser);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, signup, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
