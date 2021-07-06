import React, { useState } from 'react';
import { FC } from 'react';
import GlobalStateContext from './GlobalStateContext';

const GlobalState: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  const statesAndSetters = {
    states: {
      isDark
    },
    setters: {
      setIsDark
    }
  }
  
  return (
    <GlobalStateContext.Provider value={statesAndSetters}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
