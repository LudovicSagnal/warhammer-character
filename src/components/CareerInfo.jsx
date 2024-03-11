import { useState, useEffect, useContext } from 'react';
import { RaceContext } from '../App';
import ChoiceList from './ChoiceList';
import PDFDocument from './PDFDocument';
import { talents } from '../data/talents';
import { skills } from '../data/skills';
import SkillsAndTalents from './SkillsAndTalents';

const CareerInfo = () => {

    const { selectedCareer, mandatorySkills, setMandatorySkills, mandatoryTalents, setMandatoryTalents, mandatoryEquipment, setMandatoryEquipment, selectedSkills, setSelectedSkills, selectedTalents, setSelectedTalents, selectedEquipment, setSelectedEquipment } = useContext(RaceContext);
    const [containerClass, setContainerClass] = useState('career-blank');

    useEffect(() => {
      if (selectedCareer) {
        setContainerClass('career-container');
        setMandatorySkills(selectedCareer.skills.mandatory);
        setMandatoryTalents(selectedCareer.talents.mandatory);
        setMandatoryEquipment(selectedCareer.dotation.mandatory);
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

    return (
        <div className={containerClass} id='career-container'>
            {selectedCareer && <SkillsAndTalents/>}
            {selectedCareer && (
                <div className='selected-career'>
                    <h3>{selectedCareer.name}</h3>
                    <p className='career-description'>{selectedCareer.description}</p>
                    <h3>Compétences</h3>
                    <p>
                        {mandatorySkills && mandatorySkills.join(',  ')}
                    </p>
                    <ChoiceList
                        choices={selectedCareer.skills.choice}
                        selected={selectedSkills}
                        onSelectionChange={handleSkillSelectionChange}
                    />
                    <h3>Talents</h3>
                    <p>
                        {mandatoryTalents && mandatoryTalents.join(',  ')}
                    </p>
                    <ChoiceList
                        choices={selectedCareer.talents.choice}
                        selected={selectedTalents}
                        onSelectionChange={handleTalentSelectionChange}
                    />
                    <h3>Equipement</h3>
                    <p>
                        {mandatoryEquipment && mandatoryEquipment.join(', ')}
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