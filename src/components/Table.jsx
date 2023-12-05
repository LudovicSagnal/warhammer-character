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
    <div>
      <table className="main-profil">
        <thead>
            <tr>
                {mainCharacteristics.map((item) => {
                    return <th key={item.short_name}>{item.short_name}</th>;
                })}
                <th>Change tout</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            {mainCharacteristics.map((item, index) => (
              <td className="stat-box" key={item.short_name + index}>
                <p className='base-stat'>?</p>
                <p className='base-stat-popup'>{item.stats[race]} + 2d10</p>
                <p className="modified-stat">{item.value}</p>
                <RandomBtn onClick={() => handleRandomUniqueStat(index)} />
              </td>
            ))}
            <td className='stat-box'><RandomBtn onClick={ handleRandomAllStats }/></td>
          </tr>
        </tbody>
      </table>
      <table className="secondary-profil">
        <thead>
            <tr>
                {secondaryCharacteristics.map((item) => {
                    return <th key={item.short_name}>{item.short_name}</th>;
                })}
            </tr>
        </thead>
        <tbody>
          <tr>
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