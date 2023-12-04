import React, { useState } from 'react';
import "./styles/index.scss";
import Header from './components/Header';
import Identity from './components/Identity';
import Profil from './components/Profil';

export const RaceContext = React.createContext();

const App = () => {

  const [race, setRace] = useState('humain');
  
  return (
    <>
      <Header/>
      <RaceContext.Provider value={{ race, setRace }}>
      <div>
        <Identity />
        <Profil />
      </div>
    </RaceContext.Provider>
    </>
  );
};

export default App;