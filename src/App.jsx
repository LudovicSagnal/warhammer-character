import React from 'react';
import "./styles/index.scss";
import Header from './components/Header';
import Identity from './components/Identity';
import Profil from './components/Profil';

const App = () => {
  
  return (
    <>
      <Header/>
      <div>
        <Identity/>
        <Profil/>
      </div>
    </>
  );
};

export default App;