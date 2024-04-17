import React, { useState } from 'react';
import "./styles/index.scss";
import Header from './components/Header';
import Identity from './components/Identity';
import Profil from './components/Profil';
import Footer from './components/Footer';
import SkillsAndTalents from './components/SkillsAndTalents';
import PersonnalDetails from './components/PersonnalDetails';
import { base_main_characteristics, base_secondary_characteristics } from './data/characteristics';
import CareerInfo from './components/CareerInfo';
import AdvancedCareer from './components/AdvancedCareer';
import PDFDocument from './components/PDFDocument';
import { Button } from '@react-pdf-viewer/core';

export const RaceContext = React.createContext();

const App = () => {

  const [race, setRace] = useState('humain');
  const [origin, setOrigin] = useState('empire');
  const [gender, setGender] = useState('male');
  const [career, setCareer] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [birthplace, setBirthplace] = useState('');
  const [siblings, setSiblings] = useState('');
  const [marks, setMarks] = useState('');
  const [astral, setAstral] = useState('');
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [selectedCareerName, setSelectedCareerName] = useState('Aucune');
  const defaultPortrait = gender === 'female' ? 'default_woman.webp' : 'default_man.webp';
  const [choosenPortrait, setChoosenPortrait] = useState(defaultPortrait);
  const [mainCharacteristics, setMainCharacteristics] = useState(base_main_characteristics);
  const [secondaryCharacteristics, setSecondaryCharacteristics] = useState(base_secondary_characteristics);
  const [modifiedStats, setModifiedStats] = useState([]);
  const [modifiedSecondaryStats, setModifiedSecondaryStats] = useState([]);
  const [mandatorySkills, setMandatorySkills] = useState([]);
  const [mandatoryTalents, setMandatoryTalents] = useState([]);
  const [mandatoryEquipment, setMandatoryEquipment] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedTalents, setSelectedTalents] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [newSelection, setNewSelection] = useState(false);
  const [advancedCareer, setAdvancedCareer] = useState(null);

  const ShowAdvancedCareer = ( () => {
    setNewSelection(true);
  });
  
  return (
    <main>
      <Header/>
      <RaceContext.Provider value={{ race, setRace, origin, setOrigin, gender, setGender, career, setCareer, name, setName, firstname, setFirstname, age, setAge, height, setHeight, weight, setWeight, eyeColor, setEyeColor, hairColor, setHairColor, birthplace, setBirthplace, siblings, setSiblings, marks, setMarks, astral, setAstral, selectedCareer, setSelectedCareer, choosenPortrait, setChoosenPortrait, selectedCareerName, setSelectedCareerName, mainCharacteristics, setMainCharacteristics, secondaryCharacteristics, setSecondaryCharacteristics, modifiedStats, setModifiedStats, modifiedSecondaryStats, setModifiedSecondaryStats, mandatorySkills, setMandatorySkills, mandatoryTalents, setMandatoryTalents, mandatoryEquipment, setMandatoryEquipment, selectedSkills, setSelectedSkills, selectedTalents, setSelectedTalents, selectedEquipment, setSelectedEquipment, advancedCareer, setAdvancedCareer }}>
        <section className='main-section'>
          <Identity />
          { !newSelection &&
            <div className='detail-profil-container'>
              <PersonnalDetails />
              <Profil />            
            </div>
          }
          {!newSelection && selectedCareer && <CareerInfo />}
          <div className='bottom-btn-div'>
            {selectedCareer && <button className='bottom-btn' onClick={ShowAdvancedCareer}>Ajouter une carrière</button>}
            {newSelection && <AdvancedCareer/>}
            {selectedCareer && < PDFDocument/>}            
          </div>
          {/* <SkillsAndTalents/> */}
        </section>
        <Footer/>
      </RaceContext.Provider>
    </main>
  );
};

export default App;