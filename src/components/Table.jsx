import React, { useState } from 'react';
import RandomBtn from './RandomBtn';
import { base_main_characteristics, base_secondary_characteristics } from '../data/characteristics';

const Table = ({ race }) => {
  const [mainCharacteristics, setMainCharacteristics] = useState(base_main_characteristics);
  const [secondaryCharacteristics, setSecondaryCharacteristics] = useState(base_secondary_characteristics);

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
          return updatedSecCharacteristics;
        });
      } else if (updatedCharacteristics[index].short_name === 'E') {
        setSecondaryCharacteristics((prevSecCharacteristics) => {
          const updatedSecCharacteristics = [...prevSecCharacteristics];
          const newToughnessBonus = Number(String(randomValue)[0]);
          updatedSecCharacteristics.find((item) => item.short_name === 'BE').value = newToughnessBonus;
          return updatedSecCharacteristics;
        });
      }

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
          const randomValue = statsArray[randomIndex] + Math.floor(Math.random() * 10) + 1; // Add 1d10 to B
          updatedCharacteristics[index].value = randomValue;
        } else if (shortName === 'PD') {
          const statsArray = updatedCharacteristics[index].stats[race];
          const randomIndex = Math.floor(Math.random() * statsArray.length);
          const randomValue = statsArray[randomIndex];
          updatedCharacteristics[index].value = randomValue;
        }
      }

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

  let firstDigitF  = mainCharacteristics.find((char) => char.short_name === 'F').value;
  let firstDigitE  = mainCharacteristics.find((char) => char.short_name === 'E').value;
  let forceBonus = Math.floor(firstDigitF / 10);
  let toughnessBonus = Math.floor(firstDigitE / 10);

  return (
    <div className='profils-container'>
      <h3>Profil principal</h3>
      <table className="main-profil">
        <thead>
            <tr>
              <th className='empty-head'></th>
                {mainCharacteristics.map((item) => {
                    return <th className='stat-short' key={item.short_name}>{item.short_name}</th>;
                })}
                <th className='stat-short'>Générer</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='descriptive-box'>Base</td>
            {mainCharacteristics.map((item, index) => (
              <td className="stat-box" key={item.short_name + index}>
                <p className="modified-stat">{item.value}</p>
                <RandomBtn onClick={() => handleRandomUniqueStat(index)} />
              </td>
            ))}
            <td className='stat-box'><RandomBtn onClick={ handleRandomAllStats }/></td>
          </tr>
        </tbody>
      </table>
      <h3>Profil secondaire</h3>
      <table className="secondary-profil">
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;