import React, { useState, useEffect, useContext } from 'react';
import Select from './Select';
import { races, origins } from '../data/races';
import { careers } from '../data/careers';
import { names_elf, names_human, firstnames_human, firstnames_elf, firstnames_dwarf, names_dwarf } from '../data/names';
import { physical, eye_colors, hair_colors, distinctive_marks, siblings_number } from '../data/physical';
import { birthplace_human, birthplace_dwarf, birthplace_elf, astral_signs } from '../data/birtplace&astral';
import RandomBtn from './RandomBtn';
import { RaceContext } from '../App';
import Portrait from './Portrait';

const Identity = () => {

  const { race, setRace } = useContext(RaceContext);
  const { origin, setOrigin } = useContext(RaceContext);
  const { gender, setGender } = useContext(RaceContext);
  const { career, setCareer } = useContext(RaceContext);
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

  const genderChoice = [
    { value: 'male', label: 'Homme' },
    { value: 'female', label: 'Femme' },
  ];
  const selectedGender = genderChoice.find((option) => option.value === gender);
  const genderLabel = selectedGender ? selectedGender.label : '';

/////////////////////////////////////  Name, Firstname ////////////////////////////////////////


  const getRandomFirstName = (race, origin, gender) => {
    let firstnames;
    if (race === 'humain') {
      firstnames = firstnames_human.filter(firstname => firstname.gender === gender && firstname.origin === origin);
    } else if (race === 'elfe') {
      firstnames = firstnames_elf.filter(firstname => firstname.gender === gender);
    }else if (race === 'nain') {
      firstnames = firstnames_dwarf.filter(firstname => firstname.gender === gender);
    }
    const randomIndex = Math.floor(Math.random() * firstnames.length);
    const selectedFirstName = firstnames[randomIndex]?.value || ''; 
    
    return selectedFirstName;
  };
  const handleRandomFirstName = () => {
    const randomFirstName = getRandomFirstName(race, origin, gender);
    setFirstname(randomFirstName);
  };

  const getRandomName = (race, origin) => {
    let names;
    if (race === 'humain') {
      names = names_human.filter(name => name.origin === origin)
    }else if (race === 'elfe') {
      names = names_elf;
    }else if (race === 'nain') {
      names = names_dwarf;
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex]?.value || '';

    return selectedName;
  }
  const handleRandomName = () => {
    const randomName = getRandomName(race, origin);
    setName(randomName);
  }


///////////////////////////  Age, height, weight, eyes, hairs  //////////////////////////


const getRandomAge = (race) => {
  let minAge;
  let maxAge;
  switch (race) {
    case 'humain':
      minAge = 16;
      maxAge = 50;
      break;
    case 'elfe':
      minAge = 30;
      maxAge = 150;
      break;
    default:
      minAge = 18;
      maxAge = 60;
  }
  let age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

  return age;
}
const handleAge = () => {
  const randomAge = getRandomAge(race);
  setAge(randomAge);
}


const getRandomHeight = (race, gender) => {
  const filteredHeight = physical.filter(
    (phys) => phys.gender === gender && phys.race === race
  );

  const randomFilteredHeight = filteredHeight[Math.floor(Math.random() * filteredHeight.length)];
  const minHeight = randomFilteredHeight.minHeight;
  const maxHeight = randomFilteredHeight.maxHeight;
  const randomHeight = Math.random() * (maxHeight - minHeight) + minHeight;
  
  return randomHeight.toFixed(2);
};
const handleRandomHeight = () => {
  const randomHeight = getRandomHeight(race, gender);
  setHeight(randomHeight);
};

const getRandomWeight = (race) => {
  const filteredWeight = physical.filter(
    (phys) => phys.race === race
  );

  const randomFilteredWeight = filteredWeight[Math.floor(Math.random() * filteredWeight.length)];
  const minWeight = randomFilteredWeight.minWeight;
  const maxWeight = randomFilteredWeight.maxWeight;
  const randomWeight = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight;
  
  return randomWeight;
};
const handleRandomWeight = () => {
  const randomWeight = getRandomWeight(race);
  setWeight(randomWeight);
};

const handleRandomEyeColor = () => {

  let eyeColor = eye_colors;
  const randomIndex = Math.floor(Math.random() * eye_colors.length);
  const selectedEyeColor = eyeColor[randomIndex]?.color || '';

  setEyeColor(selectedEyeColor);
  return selectedEyeColor ;
}

const handleRandomHairColor = () => {

  let hairColor = hair_colors;
  const randomIndex = Math.floor(Math.random() * hair_colors.length);
  const selectedHairColor = hairColor[randomIndex]?.color || '';

  setHairColor(selectedHairColor);
  return selectedHairColor ;
}


////////////////////  Birthplace, siblings, distinctive marks, astral  ////////////////////////


const getRandomBirthplace = (race, origin) => {
  let birthplaces;
  if (race === 'humain') {
    birthplaces = birthplace_human.filter(birthplace => birthplace.origin === origin)
  }else if (race === 'elfe') {
    birthplaces = birthplace_elf;
  }else if (race === 'nain') {
    birthplaces = birthplace_dwarf;
  }
  const randomIndex = Math.floor(Math.random() * birthplaces.length);
  const selectedBirthplace = birthplaces[randomIndex]?.name || '';

  return selectedBirthplace;
}
const handleRandomBirthplace = () => {
  const randomBirthplace = getRandomBirthplace(race, origin);
  setBirthplace(randomBirthplace);
};

const handleRandomSiblings = () => {
  const selectedRace = siblings_number.find(sibling => sibling.race === race);
  const numbersForRace = selectedRace?.number || [0];
  const randomIndex = Math.floor(Math.random() * numbersForRace.length);
  const selectedSiblingsNumber = numbersForRace[randomIndex];

  setSiblings(selectedSiblingsNumber);
};

const handleRandomMarks = () => {

  let marks = distinctive_marks;
  const randomIndex = Math.floor(Math.random() * distinctive_marks.length);
  const selectedMarks = marks[randomIndex] || '';

  setMarks(selectedMarks)
  return selectedMarks ;
}

const handleRandomAstral = () => {

  let astral = astral_signs;
  const randomIndex = Math.floor(Math.random() * astral_signs.length);
  const selectedAstral = astral[randomIndex]?.name || '';

  setAstral(selectedAstral);
  return selectedAstral ;
}


/////////////////////////////////////   Random All   ////////////////////////////////////


const handleRandomAll = () => {
  const randomGender = genderChoice[Math.floor(Math.random() * genderChoice.length)].value;
  setGender(randomGender);
  const randomRace = races[Math.floor(Math.random() * races.length)].value;
  setRace(randomRace);
  if (randomRace === 'humain') {
    const randomOrigin = origins[Math.floor(Math.random() * origins.length)].value;
    setOrigin(randomOrigin);
  };
};
useEffect(() => {
  handleRandomName();
  handleRandomFirstName();
  handleAge();
  handleRandomHeight();
  handleRandomWeight();
  handleRandomEyeColor();
  handleRandomHairColor();
  handleRandomMarks();
  handleRandomAstral();
  handleRandomSiblings();
  handleRandomBirthplace();
}, [race, gender, origin]);

const handleRandomAllWithSelect = () => {
    handleRandomName();
    handleRandomFirstName();
    handleAge();
    handleRandomHeight();
    handleRandomWeight();
    handleRandomEyeColor();
    handleRandomHairColor();
    handleRandomMarks();
    handleRandomAstral();
    handleRandomSiblings();
    handleRandomBirthplace();
};


  return (
    <div className='identity'>
      <h2>Personnage</h2>
      <div className='character-base'>
        <div className='character-btn'>
          <button className='random-all-btn' onClick={handleRandomAll}>Générer un personnage</button>    
          <button className='random-all-btn' onClick={handleRandomAllWithSelect}>Générer un personnage en gardant les select</button>  
        </div>
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

        </div>
        <div className='display-container'>
          <p>{race}</p>
          {race === 'humain' ? (
            <p>{origin}</p>          
            ) : (
            <p>Pas d'origine selectionnable</p>
          )}
          <p>{genderLabel}</p>          
        </div>
        <Portrait gender={gender}/>  
      </div>

      <h2>Détails personnels</h2>
      <div>
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />   
        <RandomBtn onClick={handleRandomName}/>   
      </div>
      <div>
        <label htmlFor="firstname">Prénom</label>
        <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />  
        <RandomBtn onClick={handleRandomFirstName}/>
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />  
        <RandomBtn onClick={handleAge}/>      
      </div>
      <div className='input-container'>
        <label htmlFor="height">Taille</label>
        <input type="number" className="input-with-suffix" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        <span className="input-suffix">m</span>
        <RandomBtn onClick={handleRandomHeight}/>
      </div>
      <div className='input-container'>
        <label htmlFor="weight">Poids</label>
        <input type="number" className="input-with-suffix" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <span className="input-suffix">kg</span>
        <RandomBtn onClick={handleRandomWeight}/>      
      </div>
      <div>
        <label htmlFor="eye">Couleur des yeux</label>
        <input type="text" name="eye" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} />  
        <RandomBtn onClick={handleRandomEyeColor}/>      
      </div>
      <div>
        <label htmlFor="hair">Couleur des cheveux</label>
        <input type="text" name="hair" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />  
        <RandomBtn onClick={handleRandomHairColor}/>      
      </div>
      <div>
        <label htmlFor="marks">Signe distinctif</label>
        <input type="text" name="marks" value={marks} onChange={(e) => setMarks(e.target.value)} />  
        <RandomBtn onClick={handleRandomMarks}/>      
      </div>
      <div>
        <label htmlFor="astral">Signe astrologique</label>
        <input type="text" astral="hair" value={astral} onChange={(e) => setAstral(e.target.value)} />  
        <RandomBtn onClick={handleRandomAstral}/>      
      </div>
      <div>
        <label htmlFor="sibling">Nombre de frères et soeurs</label>
        <input type="text" astral="sibling" value={siblings} onChange={(e) => setSiblings(e.target.value)} />  
        <RandomBtn onClick={handleRandomSiblings}/>      
      </div>
      <div>
        <label htmlFor="birthplace">Lieu de naissance</label>
        <input type="text" name="birthplace" value={birthplace} onChange={(e) => setBirthplace(e.target.value)} />  
        <RandomBtn onClick={handleRandomBirthplace}/>      
      </div>
    </div>
  );
};

export default Identity;