import { useState, useEffect, useContext } from 'react';
import { RaceContext } from '../App';

const CareerInfo = () => {

    const { selectedCareer, selectedSkills, setSelectedSkills, selectedTalents, setSelectedTalents, selectedEquipment, setSelectedEquipment } = useContext(RaceContext);
    const [containerClass, setContainerClass] = useState('career-blank');

    useEffect(() => {
      if (selectedCareer) {
        setContainerClass('career-container');
        setSelectedSkills([]);
        setSelectedTalents([]);
        setSelectedEquipment([]);
      } else {
        setContainerClass('career-blank');
      }
    }, [selectedCareer]);

    console.log(selectedTalents);

    return (
        <div className={containerClass} id='career-container'>
            {selectedCareer && (
                <div className='selected-career'>
                    <h3>{selectedCareer.name}</h3>
                    <p className='career-description'>{selectedCareer.description}</p>
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
                    <ul>
                        {selectedCareer.talents.choice && selectedCareer.talents.choice.map((choice, index) => (
                        <li key={index}>
                            {choice.options.map((option, optionIndex) => (
                            <label key={`${index}-${optionIndex}`}>
                                <input
                                type="checkbox"
                                checked={selectedTalents.includes(option)}
                                onChange={(event) => {
                                    const newSelectedTalents = [...selectedTalents];
                                    let currentChoiceSelections = 0;
                                    for (let i = 0; i < choice.options.length; i++) {
                                        if (newSelectedTalents.includes(choice.options[i])) {
                                            currentChoiceSelections++;
                                        }
                                    }
                                    if (event.target.checked) {
                                        if (currentChoiceSelections < choice.quantity) {
                                            newSelectedTalents.push(option);
                                        } else {
                                            alert('Vous ne pouvez sélectionner que ' + choice.quantity + ' options.');
                                            event.target.checked = false;
                                        }
                                    } else {
                                        const index = newSelectedTalents.indexOf(option);
                                        if (index > -1) {
                                            newSelectedTalents.splice(index, 1);
                                        }
                                    }
                                    setSelectedTalents(newSelectedTalents);
                                }}
                                value={optionIndex}
                                />
                                {option}
                                {optionIndex !== choice.options.length - 1 && ' ou '}
                            </label>
                            ))}
                            <span> ({choice.quantity} au choix)</span>
                        </li>
                        ))}
                    </ul>
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