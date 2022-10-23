import React, { useEffect } from 'react';
import Links from './components/Links'
import './App.css';

function App() {
  useEffect(() => {
    document.title = "profile-tree"
  })


  return (
    <div>

      <Links />
    </div>
  );
}

export default App;
