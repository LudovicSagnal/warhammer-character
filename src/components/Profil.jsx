import React from 'react';
import Table from './Table';
import CareerSelection from './CareerSelection';
import { useState, useContext } from 'react';
import { RaceContext } from '../App';
import { careers } from '../data/careers';

const Profil = () => {

    const { race } = useContext(RaceContext);
    const [selectedCareer, setSelectedCareer] = useState(null);

    return (
        <div className='profil'>
            <h2>Profil</h2>
            <div>
                <h3>Carrières</h3>
                <CareerSelection careers={careers} selectedCareer={selectedCareer} setSelectedCareer={setSelectedCareer} />
            </div>
            <Table race={race} selectedCareer={selectedCareer} />
        </div>
    );
};

export default Profil;