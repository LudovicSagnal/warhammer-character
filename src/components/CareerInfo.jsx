import React from 'react';

const CareerInfo = ({ selectedCareer }) => {
    return (
        <div>
            {selectedCareer && (
                <div className='selected-career'>
                    <h3>{selectedCareer.name}</h3>
                    <p>{selectedCareer.description}</p>
                    <h3>Compétences</h3>
                    <p>
                        {selectedCareer.skills.mandatory && selectedCareer.skills.mandatory.join(', ')}
                    </p>
                    <ul>
                        {selectedCareer.skills.choice && selectedCareer.skills.choice.map((choice, index) => (
                        <li key={index}>
                            {choice.options.join(' ou ')}
                        </li>
                        ))}
                    </ul>
                    <h3>Talents</h3>
                    <p>
                        {selectedCareer.talents.mandatory && selectedCareer.talents.mandatory.join(', ')}
                    </p>
                    {selectedCareer.talents.choice && selectedCareer.talents.choice.map((choice, index) => (
                    <p key={index}>
                        {choice.options.join(' ou ')}
                    </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CareerInfo;