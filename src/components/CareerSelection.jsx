
const CareerSelection = ({ careers, setSelectedCareer }) => {

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
    <div className='career-selector'>
      <select onChange={handleCareerSelection}>
        <option value="-1">Choisis une carrière</option>
        {careers.map((career, index) => (
          <option key={index} value={index}>
            {career.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CareerSelection;