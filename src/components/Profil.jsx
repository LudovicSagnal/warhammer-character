import React from 'react';
import Table from './Table';
import Select from './Select';
import CareerSelection from './CareerSelection';
import { useContext } from 'react';
import { RaceContext } from '../App';
import { careers } from '../data/careers';

const Profil = () => {

    const { race } = useContext(RaceContext);
    const { career, setCareer } = useContext(RaceContext);

    return (
        <div className='profil'>
            <h2>Profil</h2>
            <div>
                <h3>Carrières</h3>
                <CareerSelection careers={careers} />
            </div>
            <Table race={race}/>
        </div>
    );
};

export default Profil;