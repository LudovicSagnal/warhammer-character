import React, { useState } from 'react';
import Select from './Select';
import { races, origins } from '../data/races';
import { careers } from '../data/carreers';
import { names_elf, names_human, firstnames_human, firstnames_elf, firstnames_dwarf, names_dwarf } from '../data/names';
import { physical, eye_colors, hair_colors } from '../data/physical';
import RandomBtn from './RandomBtn';

const Identity = () => {
  const [race, setRace] = useState('humain');
  const [origin, setOrigin] = useState('empire');
  const [gender, setGender] = useState('male');
  const [career, setCareer] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const genderChoice = [
    { value: 'male', label: 'Homme' },
    { value: 'female', label: 'Femme' },
  ];

/////////////////////  Name, Firstname ///////////////////////

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

////////////////////  Age, height, weight  ////////////////////

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

  return (
    <div className='identity'>
      <h2>Identité</h2>
      <Select name="race" options={races} label={'Choisissez une race'} onValueChange={(e) => setRace(e.target.value)} setValue={setRace} />
      {race === 'humain' && (
        <Select name="origin" options={origins} label={'Choisissez une origine'} onValueChange={(e) => setOrigin(e.target.value)} setValue={setOrigin} />
      )}
      <Select name="gender" options={genderChoice} label={'Choisissez un genre'} onValueChange={(e) => setGender(e.target.value)} setValue={setGender} />

      <h2>Détails du personnage</h2>
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
      <Select name="careers" options={careers} onValueChange={(e) => setCareer(e.target.value)} setValue={setCareer} />
    </div>
  );
};

export default Identity;