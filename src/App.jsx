import React, { useState } from 'react';
import "./styles/index.scss";
import Header from './components/Header';
import Identity from './components/Identity';
import Profil from './components/Profil';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Talents from './components/Talents';
import PersonnalDetails from './components/PersonnalDetails';
import CareerInfo from './components/CareerInfo';
import PDFDocument from './components/PDFDocument';

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
  const [modifiedStats, setModifiedStats] = useState([]);
  const [modifiedSecondaryStats, setModifiedSecondaryStats] = useState([]);

  console.log('Premier:'+modifiedStats);
  console.log('Deuxième :'+modifiedSecondaryStats);
  
  return (
    <main>
      <Header/>
      <RaceContext.Provider value={{ race, setRace, origin, setOrigin, gender, setGender, career, setCareer, name, setName, firstname, setFirstname, age, setAge, height, setHeight, weight, setWeight, eyeColor, setEyeColor, hairColor, setHairColor, birthplace, setBirthplace, siblings, setSiblings, marks, setMarks, astral, setAstral, selectedCareer, setSelectedCareer, choosenPortrait, setChoosenPortrait, selectedCareerName, setSelectedCareerName, modifiedStats, setModifiedStats, modifiedSecondaryStats, setModifiedSecondaryStats }}>
        <section className='main-section'>
          <Identity />
          <div className='detail-profil-container'>
            <PersonnalDetails />
            <Profil />            
          </div>
          <CareerInfo selectedCareer={selectedCareer} />
          {/* <Skills/>
          <Talents/> */}
        </section>
        <PDFDocument/>
        <Footer/>
      </RaceContext.Provider>
    </main>
  );
};

export default App;