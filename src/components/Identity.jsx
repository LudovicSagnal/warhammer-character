import React, { useState } from 'react';
import Select from './Select';
import { races, origins } from '../data/races';
import { careers } from '../data/carreers';
import { names_elf, names_human, firstnames_human, firstnames_elf } from '../data/names';

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

  const getRandomFirstName = (race, origin, gender) => {
    let names;
    
    if (race === 'humain') {
      names = firstnames_human.filter(name => name.gender === gender && name.origin === origin);
    } else if (race === 'elfe') {
      names = firstnames_elf.filter(name => name.gender === gender);
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex]?.value || ''; 
    
    return selectedName;
  };
  const handleRandomFirstName = (e) => {
    e.preventDefault();
    const randomFirstName = getRandomFirstName(race, origin, gender);
    setFirstname(randomFirstName);
  };

  return (
    <div>
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
      </div>
      <div>
        <label htmlFor="firstname">Prénom</label>
        <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />  
        <button onClick={handleRandomFirstName}>Générer un nom aléatoire</button>        
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />        
      </div>
      <div>
        <label htmlFor="height">Taille</label>
        <input type="number" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label htmlFor="weight">Poids</label>
        <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />        
      </div>
      <Select name="careers" options={careers} onValueChange={(e) => setCareer(e.target.value)} setValue={setCareer} />
    </div>
  );
};

export default Identity;