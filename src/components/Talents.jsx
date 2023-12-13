import React, { useContext } from 'react';
import { careers } from '../data/careers';
import { skills } from '../data/skills';
import { talents } from '../data/talents';
import { RaceContext } from '../App';

const Talents = () => {

    const { race } = useContext(RaceContext);
    const { career, setCareer } = useContext(RaceContext);

    return (
        <div className='talents'>
            <h2>Talents</h2>
            {talents.map(talent =>
                <div>
                    <h3>{talent.name}</h3>
                    <p>{talent.description}</p>
                </div>
            )};
        </div>
    );
};

export default Talents;