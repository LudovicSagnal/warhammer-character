import { useState, useContext, useEffect } from 'react';
import { RaceContext } from '../App';
import { careers } from '../data/careers';

const AdvancedCareer = () => {

    const { advancedCareer, setAdvancedCareer, mainCharacteristics, secondaryCharacteristics, selectedCareer, setSelectedCareer, race, modifiedStats, setModifiedStats, modifiedSecondaryStats, setModifiedSecondaryStats } = useContext(RaceContext);

    const [mainStats, setMainStats] = useState(mainCharacteristics);
    const [secondaryStats, setSecondaryStats] = useState(secondaryCharacteristics);
  
    useEffect(() => {
      setMainStats(mainCharacteristics);
      setSecondaryStats(secondaryCharacteristics);
    }, [mainCharacteristics, secondaryCharacteristics]);

    const careerModifier = (statName) => {
        if (selectedCareer && selectedCareer.stats[statName]) {
          return selectedCareer.stats[statName];
        };
    };

    const handleAdvancedCareer = (e) => {
        const selectedIndex = parseInt(e.target.value);
        if (selectedIndex >= 0) {
          const selected = careers[selectedIndex];
          setAdvancedCareer(selected);
          console.log(advancedCareer);
        } else {
          setAdvancedCareer(null);
        }
      };

    console.log(advancedCareer);

    let firstDigitF  = mainCharacteristics.find((char) => char.short_name === 'F').value;
    let firstDigitE  = mainCharacteristics.find((char) => char.short_name === 'E').value;
    let forceBonus = Math.floor(firstDigitF / 10);
    let toughnessBonus = Math.floor(firstDigitE / 10);
  
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
  
    return (
        <div className='profils-container'>
          <div>
            <select name="advanced-career" onChange={handleAdvancedCareer}>
                <option value="-1">Choisis une carrière</option>
                {selectedCareer && selectedCareer.advanced.map((item) => (
                    <option key={item.name} value={item.name}>{item.name}</option>
                ))}
            </select>
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
                {modifiedStats.map((item, index) => (
                  <td className="stat-box" key={item+ index}>
                    <p className="modified-stat">{item.value} %</p>
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

export default AdvancedCareer;