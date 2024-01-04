import React, { useState } from 'react';

const CareerSelection = ({ careers, selectedCareer, setSelectedCareer }) => {

  const handleCareerSelection = (event) => {
    const selectedIndex = parseInt(event.target.value);
    if (selectedIndex >= 0) {
      const selected = careers[selectedIndex];
      setSelectedCareer(selected);
    } else {
      setSelectedCareer(null);
    }
  };

  return (
    <div>
      <select onChange={handleCareerSelection}>
        <option value="-1">Choisis une carrière</option>
        {careers.map((career, index) => (
          <option key={index} value={index}>
            {career.name}
          </option>
        ))}
      </select>

      {selectedCareer && (
        <div>
          <h3>{selectedCareer.name}</h3>
          <p>{selectedCareer.description}</p>
          <h3>Compétences</h3>
          <p>
            {selectedCareer.skills.mandatory && selectedCareer.skills.mandatory.join(', ')}
          </p>
          <p>
            {selectedCareer.skills.choice && selectedCareer.skills.choice.map((choice, index) => (
              <p key={index}>
                {choice.options.join(' ou ')}
              </p>
            ))}
          </p>
          <h3>Talents</h3>
          <p>
            {selectedCareer.talents.mandatory && selectedCareer.talents.mandatory.join(', ')}
          </p>
          <p>
            {selectedCareer.talents.choice && selectedCareer.talents.choice.map((choice, index) => (
              <p key={index}>
                {choice.options.join(' ou ')}
              </p>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default CareerSelection;