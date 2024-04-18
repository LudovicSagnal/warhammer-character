const CareerSelection = ({ race, origin, careers, setSelectedCareer, setSelectedCareerName }) => {

  const filteredCareers = careers.filter(career => {
    if (!career.races) {
      return true;
    }
    if (Array.isArray(career.races.names)) {
      if (!career.races.names.includes(race)) {
        return false;
      }
    } else if (career.races.name !== race) {
      return false;
    }
    if (career.races.origin && career.races.origin !== origin) {
      return false;
    }
    return true;
  });

  const handleCareerSelection = (event) => {
    const selectedIndex = parseInt(event.target.value);
    if (selectedIndex >= 0) {
      const selected = filteredCareers[selectedIndex];
      const selectedCareerName = filteredCareers[selectedIndex].name;
      setSelectedCareer(selected);
      setSelectedCareerName(selectedCareerName);
    } else {
      setSelectedCareer(null);
    }
  };

  return (
    <div className='career-selector'>
      <select onChange={handleCareerSelection}>
        <option value="-1">Choisis une carrière</option>
        {filteredCareers.map((career, index) => (
          <option key={index} value={index}>
            {career.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CareerSelection;
