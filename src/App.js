import React, { useEffect } from 'react';
import Links from './components/Links';
import Profile from './components/Profile';

import './App.css';
import Socialicon from './components/Socialicon';

function App() {
  useEffect(() => {
    document.title = "profile-tree"
  })


  return (
    <div>
      <Profile />
      <Links />
      <Socialicon />

    </div>
  );
}

export default App;
