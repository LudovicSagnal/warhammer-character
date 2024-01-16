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
                    <h3>Equipement</h3>
                    <p>
                        {selectedCareer.dotation.mandatory && selectedCareer.dotation.mandatory.join(', ')}
                    </p>
                    {selectedCareer.dotation.choice && selectedCareer.dotation.choice.map((dotation, index) => (
                    <p key={index}>
                        {dotation.options.join(' ou ')}
                    </p>
                    ))}
                    <h3>Accès</h3>
                    <p>
                        {selectedCareer.access && selectedCareer.access.join(', ')}
                    </p>
                    <h3>Débouchés</h3>
                    <p>
                        {selectedCareer.access && selectedCareer.advanced.join(', ')}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CareerInfo;