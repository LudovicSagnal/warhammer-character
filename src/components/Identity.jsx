import React, { useState, useContext } from 'react';
import Select from './Select';
import { races, origins } from '../data/races';
import { RaceContext } from '../App';
import Portrait from './Portrait';
import PortraitDisplayer from './PortraitDisplayer';
import randomFunctions from '../functions/randomFunctions';

const Identity = () => {

  const { race, setRace, origin, setOrigin, gender, setGender, choosenPortrait, setChoosenPortrait, newSelection } = useContext(RaceContext);
  const [modal, setModal] = useState(false);
  const { handleRandomAll, handleRandomAllWithSelect, genderChoice, genderLabel } = randomFunctions();

  const handleModalPortrait = () => {
    setModal(!modal);
  };

  return (
    <div className='identity'>
      <h2>Personnage</h2>
      <div className='character-base'>
        { !newSelection ?      
          <div className='select-container'>
            <Select name="race" options={races} label={'Choisissez une race'} value={race} onValueChange={(e) => setRace(e.target.value)} setValue={setRace} />
            {race === 'humain' ? (
              <>
                <Select name="origin" options={origins} label={'Choisissez une origine'} value={origin} onValueChange={(e) => setOrigin(e.target.value)} setValue={setOrigin} />      
              </>
            ) : (
              <p>Pas d'origine selectionnable</p>
            )}
            <Select name="gender" options={genderChoice} label={'Choisissez un genre'} value={gender} onValueChange={(e) => setGender(e.target.value)} setValue={setGender} />
            <div className='character-btn'>
              <button className='random-all-btn' onClick={handleRandomAll} >Générer un personnage</button>    
              <button className='random-all-btn' onClick={handleRandomAllWithSelect} >Générer un personnage en conservant vos choix</button>  
            </div>
          </div>
        : <img src='./images/knight.webp'/>}
        <div className='display-container'>
          <p>Race : {race}</p>
          {race === 'humain' ? (
            <p>Origine : {origin}</p>          
            ) : (
            <p>Pas d'origine selectionnable</p>
          )}
          <p>Genre : {genderLabel}</p>          
        </div>
        <div className='avatar-container' onClick={handleModalPortrait}>
          <Portrait gender={gender} choosenPortrait={choosenPortrait} setChoosenPortrait={setChoosenPortrait}/>           
        </div>
      </div>
      {modal && <PortraitDisplayer gender={gender} choosenPortrait={choosenPortrait} setChoosenPortrait={setChoosenPortrait} handleModalPortrait={handleModalPortrait}/> }
    </div>
  );
};

export default Identity;