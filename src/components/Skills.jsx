import React, { useContext } from 'react';
import { careers } from '../data/careers';
import { skills } from '../data/skills';
import { RaceContext } from '../App';

const Skills = () => {

    const { race } = useContext(RaceContext);
    const { career, setCareer } = useContext(RaceContext);

    return (
        <div className='skills'>
            <h2>Compétences</h2>
            {skills.map(skill =>
                <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                </div>
            )};

        </div>
    );
};

export default Skills;