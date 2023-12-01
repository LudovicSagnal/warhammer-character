import React, { useState } from 'react';
import Select from './Select';
import { races, origins } from '../data/races';
import { careers } from '../data/carreers';

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

  const handleRaceChange = (e) => {
    console.log('Race:', e.target.value);
    setRace(e.target.value);
    if (e.target.value === 'humain') {
      setOrigin('empire'); // Default origin for humans
    } else {
      setOrigin('all'); // Reset origin for other races
    }
  };

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  return (
    <div>
      <h2>Identité</h2>
      <Select name="race" options={races} label={'Choisissez une race'} onValueChange={handleRaceChange} setValue={setRace} />
      {race === 'humain' && (
        <Select name="origin" options={origins} label={'Choisissez une origine'} onValueChange={handleOriginChange} setValue={setOrigin} />
      )}
      <Select name="gender" options={genderChoice} label={'Choisissez un genre'} onValueChange={(e) => setGender(e.target.value)} setValue={setGender} />

      <h2>Détails du personnage</h2>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="number" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
      <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <Select name="careers" options={careers} onValueChange={(e) => setCareer(e.target.value)} setValue={setCareer} />
    </div>
  );
};

export default Identity;