import { base_main_characteristics, base_secondary_characteristics } from '../data/characteristics';

const Table = ( { race }) => {

    let forceBonus = 0;
    let toughnessBonus = 0;

    function roll1d10() {
        const randomInt = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        return randomInt(1, 10);
      }
    function roll2d10() {
        return roll1d10() + roll1d10();
    }

    return (
        <div>
            <table className="main-profil">
                <thead>
                    <tr>
                        {base_main_characteristics.map((item) => {
                            return <th key={item.short_name}>{item.short_name}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {base_main_characteristics.map((item, index) => {
                            let value = item.stats[race] || '';
                            value = value + roll2d10();
                            if (item.name === 'Force') {
                                forceBonus = Number(String(value)[0]);
                            }else if (item.name === 'Endurance') {
                                toughnessBonus = Number(String(value)[0]);
                            }
                            return (
                                <td key={item.short_name+index}>
                                    <input type="text" defaultValue={''}  />
                                    <p>{value}</p>
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
            <table className="secondary-profil">
                <thead>
                    <tr>
                        {base_secondary_characteristics.map((item) => {
                            return <th key={item.short_name}>{item.short_name}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {base_secondary_characteristics.map((item, index) => {
                            let value = item.stats[race] ? item.stats[race] : item.stats;
                            if (Array.isArray(value)) {
                                const randomIndex = Math.floor(Math.random() * value.length);
                                value = value[randomIndex];     
                                if (item.name === 'Points de Blessures') {
                                    value = value + roll1d10();
                                }
                            }else if (item.name === 'Bonus de Force') {
                                value = forceBonus;
                                console.log(forceBonus);
                            }else if (item.name === `Bonus d'Endurance`) {
                                value = toughnessBonus;
                                console.log(toughnessBonus);
                            }

                            return (
                                <td key={item.short_name+index}>
                                    <input type="text" defaultValue={''} /> 
                                    <p>{value}</p>
                                </td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;