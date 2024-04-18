import { useState, useContext, useEffect } from 'react';
import { RaceContext } from '../App';
import { careers } from '../data/careers';
import { advanced_careers } from '../data/advanced_careers';

const AdvancedCareer = () => {

    const { advancedCareer, setAdvancedCareer, mainCharacteristics, secondaryCharacteristics, selectedCareer, modifiedStats, totalStats, setTotalStats, totalSecondaryStats, setTotalSecondaryStats, mandatorySkills, setMandatorySkills, mandatoryTalents, setMandatoryTalents, mandatoryEquipment, setMandatoryEquipment, selectedSkills, setSelectedSkills, selectedTalents, setSelectedTalents, selectedEquipment, setSelectedEquipment } = useContext(RaceContext);

    const [mainStats, setMainStats] = useState(mainCharacteristics);
    const [secondaryStats, setSecondaryStats] = useState(secondaryCharacteristics);
  
    useEffect(() => {
      setMainStats(mainCharacteristics);
      setSecondaryStats(secondaryCharacteristics);
    }, [mainCharacteristics, secondaryCharacteristics]);

    const careerModifier = (statName) => {
        if (advancedCareer && advancedCareer.stats[statName]) {
          return advancedCareer.stats[statName];
        };
    };

    const handleAdvancedCareer = (e) => {
      const selectedName = e.target.value;
      if (selectedName !== "-1") {
        const selected = careers.find((career) => career.name === selectedName);
        if (!selected) {
          const selected = advanced_careers.find((career) => career.name === selectedName);
          setAdvancedCareer(selected);
        } else {
          setAdvancedCareer(selected);
        }
      } else {
        setAdvancedCareer(null);
      };
    };
  
    useEffect(() => {
      if (selectedCareer) {
        setMainStats((prevStats) => {
          return prevStats.map((stat) => {
            if (selectedCareer.stats[stat.short_name]) {
              return { ...stat, value: stat.value + selectedCareer.stats[stat.short_name] };
            }
            return stat;
          });
        });
  
        setSecondaryStats((prevStats) => {
          return prevStats.map((stat) => {
            if (selectedCareer.stats[stat.short_name]) {
              return { ...stat, value: stat.value + selectedCareer.stats[stat.short_name] };
            }
            return stat;
          });
        });
      }
    }, [selectedCareer]);

    
    const firstDigitF  = totalStats[2];
    const firstDigitE  = totalStats[3];
    totalSecondaryStats[2] = Math.floor(firstDigitF / 10);
    totalSecondaryStats[3] = Math.floor(firstDigitE / 10);

    return (
        <div className='advanced-profils-container'>
          <div>
            <p>Ancienne(s) carrières(s) : {selectedCareer.name}</p>
            <select name="advanced-career" onChange={handleAdvancedCareer}>
                <option value="-1">Choisir une nouvelle carrière</option>
                {selectedCareer && selectedCareer.advanced.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
          </div>
          <br />
          <h3>Profil principal</h3>
          <table className="main-profil" id='profil-stats'>
            <thead>
                <tr>
                  <th className='empty-head'></th>
                    {mainCharacteristics.map((item, index) => {
                        return <th className='stat-short' key={index}>{item.short_name}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
              <tr>
                <td className='descriptive-box'>Base</td>
                {totalStats.map((item, index) => (
                  <td className="stat-box" key={index}>
                    <p className="modified-stat">{item} %</p>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="descriptive-box">Carrière</td>
                {mainCharacteristics.map((stat, index) => (
                  <td className="stat-box" key={index}>
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
                    {secondaryCharacteristics.map((item, index) => {
                        return <th className='stat-short' key={index}>{item.short_name}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
              <tr>
              <td className='descriptive-box'>Base</td>
                {totalSecondaryStats.map((item, index) => (
                  <td className="stat-box" key={index}>
                    <p className="modified-stat">{item}</p>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="descriptive-box">Carrière</td>
                {secondaryCharacteristics.map((stat, index) => (
                  <td className="stat-box" key={index}>
                    <p className="modified-stat">{careerModifier(stat.short_name) && '+ '+careerModifier(stat.short_name)}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      );
  };

export default AdvancedCareer;