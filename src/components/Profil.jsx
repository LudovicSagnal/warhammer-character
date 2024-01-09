import React from 'react';
import Table from './Table';
import CareerSelection from './CareerSelection';
import { useState, useContext } from 'react';
import { RaceContext } from '../App';
import { careers } from '../data/careers';

const Profil = () => {

    const { race, selectedCareer, setSelectedCareer, setSelectedCareerName } = useContext(RaceContext);

    return (
        <div className='profil'>
            <h2>Profil</h2>
            <div className='career-profil-selector'>
                <h3>Carrière</h3>
                <CareerSelection careers={careers} selectedCareer={selectedCareer} setSelectedCareer={setSelectedCareer} setSelectedCareerName={setSelectedCareerName} />
            </div>
            <Table race={race} selectedCareer={selectedCareer} />
        </div>
    );
};

export default Profil;