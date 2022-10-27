import React, { useEffect } from 'react';
import Links from './components/Links';
import Profile from './components/Profile';

import './App.css';
import Socialicon from './components/Socialicon';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "profile-tree"
  })


  return (
    <div>
      <Profile />
      <Links />
      <Socialicon />
      <Footer />

    </div>
  );
}

export default App;
