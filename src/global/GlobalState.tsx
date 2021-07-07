import React, { useState } from 'react';
import { FC } from 'react';
import GlobalStateContext from './GlobalStateContext';



const GlobalState: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

    const globalContext = {
      states: {
        isDark
      },

      setters: {
        setIsDark
      }

    }

  
  return (
    <GlobalStateContext.Provider value={globalContext}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
