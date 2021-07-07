import React from 'react';
import './App.css';
import GlobalState from './global/GlobalState';
import Router from './Router/Router';

const App: React.FC = () => {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
