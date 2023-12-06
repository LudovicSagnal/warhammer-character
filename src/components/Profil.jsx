import React from 'react';
import Table from './Table';
import Select from './Select';
import { useContext } from 'react';
import { RaceContext } from '../App';
import { careers } from '../data/carreers';

const Profil = () => {

    const { race } = useContext(RaceContext);
    const { career, setCareer } = useContext(RaceContext);

    return (
        <div className='profil'>
            <Table race={race}/>
            {/* <Select name="race" options={careers} label={'Choisissez une carrière'} value={career} onValueChange={(e) => setCareer(e.target.value)} setValue={setCareer} />
            <p>{career}</p> */}
        </div>
    );
};

export default Profil;