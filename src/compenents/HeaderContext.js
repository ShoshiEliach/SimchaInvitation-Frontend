import React, { createContext, useContext, useState } from 'react';

// Create a context for the header
const HeaderContext = createContext();

// Create a provider component for the context
export const HeaderProvider = ({ children }) => {
  const [headerState, setHeaderState] = useState(true); // Example state for visibility

  return (
    <HeaderContext.Provider value={{ headerState, setHeaderState }}>
      {children}
    </HeaderContext.Provider>
  );
};

// Custom hook to access the header context
export const useHeader = () => useContext(HeaderContext);
