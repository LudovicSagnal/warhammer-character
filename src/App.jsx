import React from 'react';
import "./styles/index.scss";
import Header from './components/Header';
import Select from './components/Select';
import { races } from './data/races';
import { careers } from './data/carreers';

const App = () => {
  return (
    <>
      <Header/>
      <form action="">
        <div>
          <label htmlFor="race">Race</label>
          <Select name="race" options={races} onChange={(event) => setRace(event.target.value)} />
        </div>
        <div>
          <label htmlFor="classe">Carrières basiques</label>
          <Select name="classe" options={careers} onChange={(event) => setClasse(event.target.value)} />
        </div>
      </form>
    </>
  );
};

export default App;