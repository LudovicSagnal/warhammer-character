import { useState, useEffect, useContext } from 'react';
import { RaceContext } from '../App';
import ChoiceList from './ChoiceList';
import PDFDocument from './PDFDocument';

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

    const handleTalentSelectionChange = (newSelectedTalents) => {
        setSelectedTalents(newSelectedTalents);
      };
    
      const handleSkillSelectionChange = (newSelectedSkills) => {
        setSelectedSkills(newSelectedSkills);
      };
    
      const handleEquipmentSelectionChange = (newSelectedEquipment) => {
        setSelectedEquipment(newSelectedEquipment);
      };

    console.log(selectedTalents);
    console.log(selectedSkills);
    console.log(selectedEquipment);

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
                    <ChoiceList
                        choices={selectedCareer.skills.choice}
                        selected={selectedSkills}
                        onSelectionChange={handleSkillSelectionChange}
                    />
                    <h3>Talents</h3>
                    <p>
                        {selectedCareer.talents.mandatory && selectedCareer.talents.mandatory.join(', ')}
                    </p>
                    <ChoiceList
                        choices={selectedCareer.talents.choice}
                        selected={selectedTalents}
                        onSelectionChange={handleTalentSelectionChange}
                    />
                    <h3>Equipement</h3>
                    <p>
                        {selectedCareer.dotation.mandatory && selectedCareer.dotation.mandatory.join(', ')}
                    </p>
                    <ChoiceList
                        choices={selectedCareer.dotation.choice}
                        selected={selectedEquipment}
                        onSelectionChange={handleEquipmentSelectionChange}
                    />
                    <h3>Accès</h3>
                    <p>
                        {selectedCareer.access && selectedCareer.access.join(', ')}
                    </p>
                    <h3>Débouchés</h3>
                    <p>
                        {selectedCareer.access && selectedCareer.advanced.join(', ')}
                    </p>
                    < PDFDocument/>
                </div>
            )}
        </div>
    );
};

export default CareerInfo;