import React from 'react';
import Table from './Table';
import Select from './Select';
import { useContext } from 'react';
import { RaceContext } from '../App';
import { careers } from '../data/carreers';

const Profil = () => {

    const { race } = useContext(RaceContext);
    const { career, setCareer } = useContext(RaceContext);

    const careerNames = careers.map((career) => career.value);
    console.log(careerNames);
    console.log(careerNames[0]);

    return (
        <div className='profil'>
            <h2>Profil</h2>
            {/* <Select name='career' options={careerNames} label={'Choisissez votre carrière'} value={career} onValueChange={(e) => setCareer(e.target.value)} setValue={setCareer} />
            <p>{career}</p> */}
            <Table race={race}/>
        </div>
    );
};

export default Profil;