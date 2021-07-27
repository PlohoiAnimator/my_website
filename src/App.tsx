import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <div>
      <Navbar/>
      <Write/>
    </div>
  );
}

export default App;
