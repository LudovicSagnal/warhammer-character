import Table from './Table';
import CareerSelection from './CareerSelection';
import { useContext } from 'react';
import { RaceContext } from '../App';
import { careers } from '../data/careers';

const Profil = () => {

    const { race, origin, selectedCareer, setSelectedCareer, setSelectedCareerName, mainCharacteristics, setMainCharacteristics, secondaryCharacteristics, setSecondaryCharacteristics, modifiedStats, setModifiedStats, modifiedSecondaryStats, setModifiedSecondaryStats, totalStats, setTotalStats, totalSecondaryStats, setTotalSecondaryStats } = useContext(RaceContext);

    return (
        <div className='profil'>
            <h2>Profil</h2>
            <div className='career-profil-selector'>
                <h3>Carrière</h3>
                <CareerSelection race={race} origin={origin} careers={careers} selectedCareer={selectedCareer} setSelectedCareer={setSelectedCareer} setSelectedCareerName={setSelectedCareerName} />
            </div>
            <Table race={race} selectedCareer={selectedCareer} mainCharacteristics={mainCharacteristics} setMainCharacteristics={setMainCharacteristics} secondaryCharacteristics={secondaryCharacteristics} setSecondaryCharacteristics= {setSecondaryCharacteristics} modifiedStats={modifiedStats} setModifiedStats={setModifiedStats} modifiedSecondaryStats={modifiedSecondaryStats} setModifiedSecondaryStats={setModifiedSecondaryStats} totalStats={totalStats} setTotalStats={setTotalStats} totalSecondaryStats={totalSecondaryStats} setTotalSecondaryStats={setTotalSecondaryStats}/>
        </div>
    );
};

export default Profil;