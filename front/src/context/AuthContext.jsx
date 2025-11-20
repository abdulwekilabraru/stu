import React, { createContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Here you would typically verify the token with the backend
      // For now, we'll just decode it (this is not secure for production)
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        // A real app would fetch user profile from backend
        setUser({ id: decoded.id, role: 'admin' }); // Mock user
      } catch (error) {
        console.error("Invalid token");
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    // In a real app, you'd fetch the user profile here
    setUser({ id: data._id, role: data.role, name: data.name, email: data.email });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
