import { useEffect} from 'react';
import RandomBtn from './RandomBtn';

const Table = ({ race, selectedCareer, mainCharacteristics, setMainCharacteristics, secondaryCharacteristics, setSecondaryCharacteristics, modifiedStats, setModifiedStats, modifiedSecondaryStats, setModifiedSecondaryStats, setTotalStats, setTotalSecondaryStats }) => {

  function roll2d10() {
    return Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 10) + 1;
  }

  const handleRandomUniqueStat = (index) => {
    setMainCharacteristics((prevCharacteristics) => {
      const updatedCharacteristics = [...prevCharacteristics];
      const baseStat = updatedCharacteristics[index].stats[race] || 0;
      const randomValue = baseStat + roll2d10();
      updatedCharacteristics[index].value = randomValue;


      if (updatedCharacteristics[index].short_name === 'F') {
        setSecondaryCharacteristics((prevSecCharacteristics) => {
          const updatedSecCharacteristics = [...prevSecCharacteristics];
          const newForceBonus = Number(String(randomValue)[0]);
          updatedSecCharacteristics.find((item) => item.short_name === 'BF').value = newForceBonus;
          updateModifiedSecondaryStats(updatedSecCharacteristics);
          return updatedSecCharacteristics;
        });
      } else if (updatedCharacteristics[index].short_name === 'E') {
        setSecondaryCharacteristics((prevSecCharacteristics) => {
          const updatedSecCharacteristics = [...prevSecCharacteristics];
          const newToughnessBonus = Number(String(randomValue)[0]);
          updatedSecCharacteristics.find((item) => item.short_name === 'BE').value = newToughnessBonus;
          updateModifiedSecondaryStats(updatedSecCharacteristics);
          return updatedSecCharacteristics;
        });
      }
      updateModifiedStats(updatedCharacteristics);
      return updatedCharacteristics;
    });
  };

  const handleRandomUniqueSecondaryStat = (shortName) => {
    setSecondaryCharacteristics((prevCharacteristics) => {
      const updatedCharacteristics = [...prevCharacteristics];
      const index = updatedCharacteristics.findIndex((item) => item.short_name === shortName);

      if (index !== -1) {
        if (shortName === 'B') {
          const statsArray = updatedCharacteristics[index].stats[race];
          const randomIndex = Math.floor(Math.random() * statsArray.length);
          const randomValue = statsArray[randomIndex] + Math.floor(Math.random() * 10) + 1;
          updatedCharacteristics[index].value = randomValue;
        } else if (shortName === 'PD') {
          const statsArray = updatedCharacteristics[index].stats[race];
          const randomIndex = Math.floor(Math.random() * statsArray.length);
          const randomValue = statsArray[randomIndex];
          updatedCharacteristics[index].value = randomValue;
        };
      };
      updateModifiedStats(updatedCharacteristics);
      return updatedCharacteristics;
    });
  };

  
  const handleRandomAllStats = () => {
    for (let i = 0; i < mainCharacteristics.length; i++) {
      handleRandomUniqueStat(i);
    }
  
    for (let i = 0; i < secondaryCharacteristics.length; i++) {
      if (secondaryCharacteristics[i].short_name === 'B' || secondaryCharacteristics[i].short_name === 'PD') {
        handleRandomUniqueSecondaryStat(secondaryCharacteristics[i].short_name);
      }
    }
  };

  useEffect(() => {
    handleRandomAllStats();
  }, [race]);

  const updateModifiedStats = () => {
    const updatedStats = mainCharacteristics.map((char) => char.value);
    setModifiedStats(updatedStats);
  };
  const updateModifiedSecondaryStats = () => {
    const updatedSecondaryStats = secondaryCharacteristics.map((char) => char.value);
    setModifiedSecondaryStats(updatedSecondaryStats);
  };

  let firstDigitF  = mainCharacteristics.find((char) => char.short_name === 'F').value;
  let firstDigitE  = mainCharacteristics.find((char) => char.short_name === 'E').value;
  let forceBonus = Math.floor(firstDigitF / 10);
  let toughnessBonus = Math.floor(firstDigitE / 10);

  const careerModifier = (statName) => {
    if (selectedCareer && selectedCareer.stats[statName]) {
      return selectedCareer.stats[statName];
    }
    return '';
  };

  useEffect(() => {
    const newTotalStats = modifiedStats.map((stat, index) => {
      const careerBonus = careerModifier(mainCharacteristics[index].short_name) || 0;
      return stat + careerBonus;
    });
    setTotalStats(newTotalStats);
  }, [mainCharacteristics, modifiedStats, race, selectedCareer]);

  useEffect(() => {
    const careerBonus = {};
    secondaryCharacteristics.forEach((item) => {
      careerBonus[item.short_name] = careerModifier(item.short_name) || 0;
    });
  
    const newTotalSecondaryStats = modifiedSecondaryStats.map((stat, index) => {
      return stat + careerBonus[secondaryCharacteristics[index].short_name];
    });
  
    const AIndex = secondaryCharacteristics.findIndex((item) => item.short_name === 'A');
    const MIndex = secondaryCharacteristics.findIndex((item) => item.short_name === 'M');
    const MagIndex = secondaryCharacteristics.findIndex((item) => item.short_name === 'Mag');
    const PFIndex = secondaryCharacteristics.findIndex((item) => item.short_name === 'PF');
  
    newTotalSecondaryStats[0] = secondaryCharacteristics[AIndex].stats[race] + careerBonus['A'] || 0;
    newTotalSecondaryStats[4] = secondaryCharacteristics[MIndex].stats[race] + careerBonus['M'] || 0;
    newTotalSecondaryStats[5] = secondaryCharacteristics[MagIndex].stats[race] + careerBonus['Mag'] || 0;
    newTotalSecondaryStats[6] = secondaryCharacteristics[PFIndex].stats[race] + careerBonus['PF'] || 0;
  
    setTotalSecondaryStats(newTotalSecondaryStats);
  }, [secondaryCharacteristics, modifiedSecondaryStats, race, selectedCareer]);


  return (
    <div className='profils-container'>
      <div>
        <button onClick={ handleRandomAllStats } className='random-all-btn'>Générer des stats aléatoires</button>
      </div>
      <br />
      <h3>Profil principal</h3>
      <table className="main-profil" id='profil-stats'>
        <thead>
            <tr>
              <th className='empty-head'></th>
                {mainCharacteristics.map((item) => {
                    return <th className='stat-short' key={item.short_name}>{item.short_name}</th>;
                })}
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='descriptive-box'>Base</td>
            {mainCharacteristics.map((item, index) => (
              <td className="stat-box" key={item.short_name + index}>
                <p className="modified-stat">{item.value} %</p>
                <RandomBtn onClick={() => handleRandomUniqueStat(index)} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="descriptive-box">Carrière</td>
            {mainCharacteristics.map((stat, index) => (
              <td className="stat-box" key={stat.short_name + index}>
                <p className="modified-stat">{careerModifier(stat.short_name) && '+ '+careerModifier(stat.short_name)+'%'}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <h3>Profil secondaire</h3>
      <table className="secondary-profil" id='profil-secondary-stats'>
        <thead>
            <tr>
              <th className='empty-head'></th>
                {secondaryCharacteristics.map((item) => {
                    return <th className='stat-short' key={item.short_name}>{item.short_name}</th>;
                })}
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='descriptive-box'>Base</td>
              {secondaryCharacteristics.map((item, index) => (
                <td className="stat-box" key={item.short_name + index}>
                  {item.short_name === 'B' || item.short_name === 'PD' ? (
                    <div>
                      <p className="modified-stat">{item.value}</p>
                      <RandomBtn onClick={() => handleRandomUniqueSecondaryStat(item.short_name)} />
                    </div>
                  ) : item.short_name === 'BF' ? (
                    <p className="modified-stat">{forceBonus || 0}</p>
                  ) : item.short_name === 'BE' ? (
                    <p className="modified-stat">{toughnessBonus || 0}</p>
                  ) : (
                    <p className="modified-stat">{Array.isArray(item.stats[race]) ? item.stats[race][0] : item.stats[race]}</p>
                  )}
                </td>
              ))}
          </tr>
          <tr>
            <td className="descriptive-box">Carrière</td>
            {secondaryCharacteristics.map((stat, index) => (
              <td className="stat-box" key={stat.short_name + index}>
                <p className="modified-stat">{careerModifier(stat.short_name) && '+ '+careerModifier(stat.short_name)}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;