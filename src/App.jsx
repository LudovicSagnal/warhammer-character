import React, { useState } from 'react';
import "./styles/index.scss";
import Header from './components/Header';
import Identity from './components/Identity';
import Profil from './components/Profil';

export const RaceContext = React.createContext();

const App = () => {

  const [race, setRace] = useState('humain');
  const [origin, setOrigin] = useState('empire');
  const [gender, setGender] = useState('male');
  const [career, setCareer] = useState('');
  
  return (
    <main>
      <Header/>
      <RaceContext.Provider value={{ race, setRace, origin, setOrigin, gender, setGender, career, setCareer }}>
      <div>
        <Identity />
        <Profil />
      </div>
    </RaceContext.Provider>
    </main>
  );
};

export default App;