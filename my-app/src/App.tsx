import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeButton from './components/homeButton';
import NavButton from './components/navButton';
import NavDropDown from './components/navDropDown';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <HomeButton />
        <NavButton title={"About"} />
        <NavDropDown title={"Pages"} />
        <NavButton title={"Portfolio"} />

      </div>
      <div className='App-content'>
        {/* Add content */}
      </div>
      <div className='App-footer'></div>
    </div>
  );
}

export default App;
