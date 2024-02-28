import { useContext } from 'react';
import RandomBtn from './RandomBtn';
import { RaceContext } from '../App';
import randomFunctions from '../functions/randomFunctions';

const PersonnalDetails = () => {

    const { name, setName, firstname, setFirstname, age, setAge, height, setHeight, weight, setWeight, eyeColor, setEyeColor, hairColor, setHairColor, birthplace, setBirthplace, siblings, setSiblings, marks, setMarks, astral, setAstral } = useContext(RaceContext);

    const { handleRandomName, handleRandomFirstName, handleAge, handleRandomHeight, handleRandomWeight, handleRandomEyeColor, handleRandomHairColor, handleRandomMarks, handleRandomAstral, handleRandomSiblings, handleRandomBirthplace } = randomFunctions();

    return (
        <div className='detail-container'>
            <h2>Détails personnels</h2>
            <div className='div-container'>
                <div className='label-div-container'>
                    <label htmlFor="name">Nom</label>
                    <div className='input-btn-container'>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />   
                        <RandomBtn onClick={handleRandomName}/>                           
                    </div>
                </div>
                <div className='label-div-container'>
                    <label htmlFor="firstname">Prénom</label>
                    <div className='input-btn-container'>
                        <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />  
                        <RandomBtn onClick={handleRandomFirstName}/>
                    </div>
                </div>
                <div className='label-div-container'>
                    <label htmlFor="age">Age</label>
                    <div className='input-btn-container'>
                        <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />  
                        <RandomBtn onClick={handleAge}/>                            
                    </div>  
                </div>
                <div className='input-container label-div-container'>
                    <label htmlFor="height">Taille</label>
                    <div className='input-btn-container'>
                        <input type="number" className="input-with-suffix" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                        <span className="input-suffix">m</span>
                        <RandomBtn onClick={handleRandomHeight}/>                        
                    </div>
                </div>
                <div className='input-container label-div-container'>
                    <label htmlFor="weight">Poids</label>
                    <div className='input-btn-container'>
                        <input type="number" className="input-with-suffix" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        <span className="input-suffix">kg</span>
                        <RandomBtn onClick={handleRandomWeight}/>                          
                    </div>
                </div>
                <div className='label-div-container'>
                    <label htmlFor="eye">Couleur des yeux</label>
                    <div className='input-btn-container'>
                        <input type="text" name="eye" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} />  
                        <RandomBtn onClick={handleRandomEyeColor}/>   
                    </div>
                </div>
                <div className='label-div-container'>
                    <label htmlFor="hair">Couleur des cheveux</label>
                    <div className='input-btn-container'>
                        <input type="text" name="hair" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />  
                        <RandomBtn onClick={handleRandomHairColor}/>  
                    </div>
                </div>
                <div className='label-div-container'>
                    <label htmlFor="marks">Signe distinctif</label>
                    <div className='input-btn-container'>
                        <input type="text" name="marks" value={marks} onChange={(e) => setMarks(e.target.value)} />  
                        <RandomBtn onClick={handleRandomMarks}/>   
                    </div>
                </div>
                <div className='label-div-container'>
                    <label htmlFor="astral">Signe astrologique</label>
                    <div className='input-btn-container'>
                        <input type="text" astral="hair" value={astral} onChange={(e) => setAstral(e.target.value)} />  
                        <RandomBtn onClick={handleRandomAstral}/>                            
                    </div>
                </div>
                <div className='label-div-container'>
                    <label htmlFor="sibling">Nb de frères et soeurs</label>
                    <div className='input-btn-container'>
                        <input type="text" astral="sibling" value={siblings} onChange={(e) => setSiblings(e.target.value)} />  
                        <RandomBtn onClick={handleRandomSiblings}/>   
                    </div>
                </div>
                <div className='label-div-container'>
                    <label htmlFor="birthplace">Lieu de naissance</label>
                    <div className='input-btn-container'>
                        <input type="text" name="birthplace" value={birthplace} onChange={(e) => setBirthplace(e.target.value)} />  
                        <RandomBtn onClick={handleRandomBirthplace}/> 
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default PersonnalDetails;