import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  user: null,
  loading: true,
  error: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  // ... (lógica de autenticación)
  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };