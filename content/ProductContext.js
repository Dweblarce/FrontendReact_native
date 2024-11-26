import React, { createContext, useState, useEffect } from 'react';

const ProductContext = createContext({
  products: [],
  loading: true,
  error: null,
});

const ProductProvider = ({ children }) => {
  // ... (lógica de carga de productos)
  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { ProductContext, ProductProvider };