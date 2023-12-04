import React from 'react';
import { races, origins } from '../data/races';
import { careers } from '../data/carreers';
import { useState } from 'react';

const Profil = () => {

    const [CC, setCC] = useState(30);
    const [CT, setCT] = useState(35);


    function roll1d10() {
        return randomInt(1, 10);
    }
    function roll2d10() {
        return randomInt(1, 10) + randomInt(1, 10);
    }


    return (
        <div className='profil'>
            <div className="main-profil">
                <div className="based">
                    <h3>Base</h3>
                </div>
                <div className="advanced">Avancé</div>
                <div className="current">Actuel</div>
                <div className="cc">CC</div>
                <div className="ct">CT</div>
                <div className="f">F</div>
                <div className="e">E</div>
                <div className="ag">Ag</div>
                <div className="int">Int</div>
                <div className="fm">FM</div>
                <div className="soc">Soc</div>
                <p className="base-cc">{CC}</p>
                <p className="base-ct">{CT}</p>
                <p className='current-soc'>lol</p>
            </div>
            <div className="secondary-profil">

            </div>
        </div>
    );
};

export default Profil;