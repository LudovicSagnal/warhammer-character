import { useContext } from 'react';
import RandomBtn from './RandomBtn';
import { RaceContext } from '../App';
import randomFunctions from '../functions/randomFunctions';

const PersonnalDetails = () => {

    const { name, setName, firstname, setFirstname, age, setAge, height, setHeight, weight, setWeight, eyeColor, setEyeColor, hairColor, setHairColor, birthplace, setBirthplace, siblings, setSiblings, marks, setMarks, astral, setAstral } = useContext(RaceContext);

    const { handleRandomName, handleRandomFirstName, handleAge, handleRandomHeight, handleRandomWeight, handleRandomEyeColor, handleRandomHairColor, handleRandomMarks, handleRandomAstral, handleRandomSiblings, handleRandomBirthplace } = randomFunctions();

    return (
        <div>
            <h2>Détails personnels</h2>
            <div>
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />   
                <RandomBtn onClick={handleRandomName}/>   
            </div>
            <div>
                <label htmlFor="firstname">Prénom</label>
                <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />  
                <RandomBtn onClick={handleRandomFirstName}/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />  
                <RandomBtn onClick={handleAge}/>      
            </div>
            <div className='input-container'>
                <label htmlFor="height">Taille</label>
                <input type="number" className="input-with-suffix" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                <span className="input-suffix">m</span>
                <RandomBtn onClick={handleRandomHeight}/>
            </div>
            <div className='input-container'>
                <label htmlFor="weight">Poids</label>
                <input type="number" className="input-with-suffix" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                <span className="input-suffix">kg</span>
                <RandomBtn onClick={handleRandomWeight}/>      
            </div>
            <div>
                <label htmlFor="eye">Couleur des yeux</label>
                <input type="text" name="eye" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} />  
                <RandomBtn onClick={handleRandomEyeColor}/>      
            </div>
            <div>
                <label htmlFor="hair">Couleur des cheveux</label>
                <input type="text" name="hair" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />  
                <RandomBtn onClick={handleRandomHairColor}/>      
            </div>
            <div>
                <label htmlFor="marks">Signe distinctif</label>
                <input type="text" name="marks" value={marks} onChange={(e) => setMarks(e.target.value)} />  
                <RandomBtn onClick={handleRandomMarks}/>      
            </div>
            <div>
                <label htmlFor="astral">Signe astrologique</label>
                <input type="text" astral="hair" value={astral} onChange={(e) => setAstral(e.target.value)} />  
                <RandomBtn onClick={handleRandomAstral}/>      
            </div>
            <div>
                <label htmlFor="sibling">Nombre de frères et soeurs</label>
                <input type="text" astral="sibling" value={siblings} onChange={(e) => setSiblings(e.target.value)} />  
                <RandomBtn onClick={handleRandomSiblings}/>      
            </div>
            <div>
                <label htmlFor="birthplace">Lieu de naissance</label>
                <input type="text" name="birthplace" value={birthplace} onChange={(e) => setBirthplace(e.target.value)} />  
                <RandomBtn onClick={handleRandomBirthplace}/>      
            </div>
        </div>
    );
};

export default PersonnalDetails;