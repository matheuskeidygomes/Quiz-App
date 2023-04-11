import React from 'react';
import Home from './pages/home';
import { SickProvider } from './contexts/SickProvider';

export default function App() {
  return <>
    <SickProvider>
      <Home />
    </SickProvider>
  </>
}


