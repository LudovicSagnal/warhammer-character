import React from 'react';
import Table from './Table';
import { useContext } from 'react';
import { RaceContext } from '../App';

const Profil = () => {

    const { race } = useContext(RaceContext);

    return (
        <div className='profil'>
            <Table race={race}/>
        </div>
    );
};

export default Profil;